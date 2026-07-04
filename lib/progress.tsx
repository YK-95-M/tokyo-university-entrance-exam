"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { TOTAL_PAGE_COUNT } from "@/lib/content/registry";

const STORAGE_KEY = "todai-progress-v1";

type StoredState = {
  visited: string[]; // page ids "section/page"
  lastVisitDate: string | null; // YYYY-MM-DD
  streak: number;
};

const DEFAULT_STATE: StoredState = {
  visited: [],
  lastVisitDate: null,
  streak: 0,
};

function todayKey(d = new Date()) {
  return d.toISOString().slice(0, 10);
}

function daysBetween(a: string, b: string) {
  const da = new Date(a + "T00:00:00Z").getTime();
  const db = new Date(b + "T00:00:00Z").getTime();
  return Math.round((db - da) / (1000 * 60 * 60 * 24));
}

function loadState(): StoredState {
  if (typeof window === "undefined") return DEFAULT_STATE;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_STATE;
    const parsed = JSON.parse(raw);
    return { ...DEFAULT_STATE, ...parsed };
  } catch {
    return DEFAULT_STATE;
  }
}

type ProgressContextValue = {
  visitedCount: number;
  totalCount: number;
  percent: number;
  streak: number;
  isVisited: (id: string) => boolean;
  markVisited: (id: string) => void;
};

const ProgressContext = createContext<ProgressContextValue | null>(null);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<StoredState>(DEFAULT_STATE);

  useEffect(() => {
    // localStorageはサーバーに存在しないため、マウント後にクライアント側でのみ読み込む
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setState(loadState());
  }, []);

  const markVisited = useCallback(
    (id: string) => {
      setState((prev) => {
        const today = todayKey();
        const visited = prev.visited.includes(id)
          ? prev.visited
          : [...prev.visited, id];

        let streak = prev.streak;
        if (prev.lastVisitDate === null) {
          streak = 1;
        } else if (prev.lastVisitDate !== today) {
          const gap = daysBetween(prev.lastVisitDate, today);
          streak = gap === 1 ? prev.streak + 1 : gap === 0 ? prev.streak : 1;
        }

        const next: StoredState = { visited, lastVisitDate: today, streak };
        if (typeof window !== "undefined") {
          window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        }
        return next;
      });
    },
    []
  );

  const value = useMemo<ProgressContextValue>(() => {
    const visitedCount = state.visited.length;
    return {
      visitedCount,
      totalCount: TOTAL_PAGE_COUNT,
      percent: Math.round((visitedCount / TOTAL_PAGE_COUNT) * 100),
      streak: state.streak,
      isVisited: (id: string) => state.visited.includes(id),
      markVisited,
    };
  }, [state, markVisited]);

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) {
    throw new Error("useProgress must be used within ProgressProvider");
  }
  return ctx;
}
