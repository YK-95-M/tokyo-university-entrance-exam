"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  CATEGORY_LABELS,
  CATEGORY_ORDER,
  EXERCISES,
} from "@/lib/workout/exercises";
import { useWorkout } from "@/lib/workout/store";
import { formatDateLabel } from "@/lib/workout/date";

export default function SelectExercisesPage() {
  const router = useRouter();
  const { ready, selectedDate, getDay, setDayExercises } = useWorkout();
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const [query, setQuery] = useState("");
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (ready && !initialized) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setChecked(new Set(Object.keys(getDay(selectedDate))));
      setInitialized(true);
    }
  }, [ready, initialized, getDay, selectedDate]);

  const filtered = useMemo(() => {
    const q = query.trim();
    if (!q) return EXERCISES;
    return EXERCISES.filter((e) => e.name.includes(q));
  }, [query]);

  const grouped = useMemo(() => {
    return CATEGORY_ORDER.map((category) => ({
      category,
      items: filtered.filter((e) => e.category === category),
    })).filter((g) => g.items.length > 0);
  }, [filtered]);

  const toggle = (id: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleAdd = () => {
    setDayExercises(selectedDate, Array.from(checked));
    router.push("/workout");
  };

  return (
    <div className="space-y-4 pb-20">
      <div>
        <p className="text-xs font-semibold text-slate-400">{formatDateLabel(selectedDate)}のワークアウト</p>
        <h2 className="mt-0.5 text-lg font-bold text-slate-900 dark:text-slate-50">
          種目を選ぶ
        </h2>
      </div>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="種目を検索"
        className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm focus:border-violet-400 focus:outline-none dark:border-slate-800 dark:bg-slate-900"
      />

      <div className="space-y-5">
        {grouped.map((group) => (
          <div key={group.category}>
            <h3 className="mb-2 px-1 text-xs font-bold text-slate-400">
              {CATEGORY_LABELS[group.category]}
            </h3>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
              {group.items.map((exercise, i) => {
                const isChecked = checked.has(exercise.id);
                return (
                  <label
                    key={exercise.id}
                    className={`flex cursor-pointer items-center gap-3 px-3.5 py-3 ${
                      i > 0 ? "border-t border-slate-100 dark:border-slate-800" : ""
                    }`}
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-xl dark:bg-violet-500/10">
                      {exercise.icon}
                    </span>
                    <span className="flex-1 text-sm font-medium text-slate-800 dark:text-slate-100">
                      {exercise.name}
                    </span>
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => toggle(exercise.id)}
                      className="h-5 w-5 shrink-0 accent-violet-600"
                    />
                  </label>
                );
              })}
            </div>
          </div>
        ))}
        {grouped.length === 0 && (
          <p className="py-8 text-center text-sm text-slate-400">該当する種目がありません</p>
        )}
      </div>

      <div className="fixed inset-x-0 bottom-14 z-10 mx-auto w-full max-w-md px-4">
        <button
          type="button"
          onClick={handleAdd}
          className="w-full rounded-full bg-violet-600 py-3 text-sm font-bold text-white shadow-lg shadow-violet-600/20 hover:bg-violet-500 disabled:cursor-not-allowed disabled:bg-slate-300"
        >
          {checked.size > 0
            ? `${checked.size}種目をワークアウトに追加`
            : "種目を選択してください"}
        </button>
      </div>
    </div>
  );
}
