"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const STORAGE_KEY = "workout-data-v1";

export type SetEntry = {
  id: string;
  weight: string; // kg, kept as string so inputs can hold intermediate values
  reps: string;
};

export type DayLog = Record<string, SetEntry[]>; // exerciseId -> sets
export type WorkoutData = Record<string, DayLog>; // dateKey (YYYY-MM-DD) -> DayLog

const EMPTY_DAY: DayLog = {};

function loadData(): WorkoutData {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw) as WorkoutData;
  } catch {
    return {};
  }
}

function makeId() {
  return Math.random().toString(36).slice(2, 10);
}

export function todayKey(d = new Date()) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export type ExerciseHistoryPoint = {
  date: string;
  maxWeight: number;
};

type WorkoutContextValue = {
  ready: boolean;
  selectedDate: string;
  setSelectedDate: (date: string) => void;
  getDay: (date: string) => DayLog;
  setDayExercises: (date: string, exerciseIds: string[]) => void;
  addSet: (date: string, exerciseId: string, prefill?: { weight: string; reps: string }) => void;
  updateSet: (
    date: string,
    exerciseId: string,
    setId: string,
    patch: Partial<Pick<SetEntry, "weight" | "reps">>
  ) => void;
  removeSet: (date: string, exerciseId: string, setId: string) => void;
  removeExercise: (date: string, exerciseId: string) => void;
  getExerciseHistory: (exerciseId: string) => ExerciseHistoryPoint[];
  allDates: () => string[];
};

const WorkoutContext = createContext<WorkoutContextValue | null>(null);

export function WorkoutProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<WorkoutData>({});
  const [ready, setReady] = useState(false);
  const [selectedDate, setSelectedDate] = useState(() => todayKey());

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setData(loadData());
    setReady(true);
  }, []);

  const persist = useCallback((next: WorkoutData) => {
    setData(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    }
  }, []);

  const getDay = useCallback((date: string) => data[date] ?? EMPTY_DAY, [data]);

  const setDayExercises = useCallback(
    (date: string, exerciseIds: string[]) => {
      const prevDay = data[date] ?? {};
      const nextDay: DayLog = {};
      for (const id of exerciseIds) {
        nextDay[id] = prevDay[id] ?? [];
      }
      persist({ ...data, [date]: nextDay });
    },
    [data, persist]
  );

  const addSet = useCallback(
    (date: string, exerciseId: string, prefill?: { weight: string; reps: string }) => {
      const day = data[date] ?? {};
      const sets = day[exerciseId] ?? [];
      const newSet: SetEntry = {
        id: makeId(),
        weight: prefill?.weight ?? "",
        reps: prefill?.reps ?? "",
      };
      const nextDay = { ...day, [exerciseId]: [...sets, newSet] };
      persist({ ...data, [date]: nextDay });
    },
    [data, persist]
  );

  const updateSet = useCallback(
    (
      date: string,
      exerciseId: string,
      setId: string,
      patch: Partial<Pick<SetEntry, "weight" | "reps">>
    ) => {
      const day = data[date] ?? {};
      const sets = day[exerciseId] ?? [];
      const nextSets = sets.map((s) => (s.id === setId ? { ...s, ...patch } : s));
      const nextDay = { ...day, [exerciseId]: nextSets };
      persist({ ...data, [date]: nextDay });
    },
    [data, persist]
  );

  const removeSet = useCallback(
    (date: string, exerciseId: string, setId: string) => {
      const day = data[date] ?? {};
      const sets = day[exerciseId] ?? [];
      const nextDay = { ...day, [exerciseId]: sets.filter((s) => s.id !== setId) };
      persist({ ...data, [date]: nextDay });
    },
    [data, persist]
  );

  const removeExercise = useCallback(
    (date: string, exerciseId: string) => {
      const day = { ...(data[date] ?? {}) };
      delete day[exerciseId];
      persist({ ...data, [date]: day });
    },
    [data, persist]
  );

  const getExerciseHistory = useCallback(
    (exerciseId: string): ExerciseHistoryPoint[] => {
      const points: ExerciseHistoryPoint[] = [];
      for (const date of Object.keys(data).sort()) {
        const sets = data[date]?.[exerciseId];
        if (!sets || sets.length === 0) continue;
        const weights = sets
          .map((s) => Number(s.weight))
          .filter((n) => Number.isFinite(n) && n > 0);
        if (weights.length === 0) continue;
        points.push({ date, maxWeight: Math.max(...weights) });
      }
      return points;
    },
    [data]
  );

  const allDates = useCallback(() => Object.keys(data).sort(), [data]);

  const value = useMemo<WorkoutContextValue>(
    () => ({
      ready,
      selectedDate,
      setSelectedDate,
      getDay,
      setDayExercises,
      addSet,
      updateSet,
      removeSet,
      removeExercise,
      getExerciseHistory,
      allDates,
    }),
    [
      ready,
      selectedDate,
      getDay,
      setDayExercises,
      addSet,
      updateSet,
      removeSet,
      removeExercise,
      getExerciseHistory,
      allDates,
    ]
  );

  return <WorkoutContext.Provider value={value}>{children}</WorkoutContext.Provider>;
}

export function useWorkout() {
  const ctx = useContext(WorkoutContext);
  if (!ctx) throw new Error("useWorkout must be used within WorkoutProvider");
  return ctx;
}
