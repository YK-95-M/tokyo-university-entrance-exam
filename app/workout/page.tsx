"use client";

import Link from "next/link";
import { useWorkout, todayKey } from "@/lib/workout/store";
import { formatDateLabel, shiftDateKey } from "@/lib/workout/date";
import { ExerciseCard } from "@/components/workout/ExerciseCard";

export default function WorkoutTodayPage() {
  const { ready, selectedDate, setSelectedDate, getDay } = useWorkout();
  const day = getDay(selectedDate);
  const exerciseIds = Object.keys(day);
  const totalSets = exerciseIds.reduce((sum, id) => sum + day[id].length, 0);

  if (!ready) {
    return <p className="py-10 text-center text-sm text-slate-400">読み込み中…</p>;
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-2.5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <button
          type="button"
          onClick={() => setSelectedDate(shiftDateKey(selectedDate, -1))}
          aria-label="前の日"
          className="rounded-full p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          ◀
        </button>
        <div className="flex flex-col items-center">
          <span className="text-sm font-bold text-slate-900 dark:text-slate-50">
            {formatDateLabel(selectedDate)}
          </span>
          {selectedDate !== todayKey() && (
            <button
              type="button"
              onClick={() => setSelectedDate(todayKey())}
              className="text-[11px] font-semibold text-violet-600 dark:text-violet-400"
            >
              今日に戻る
            </button>
          )}
        </div>
        <button
          type="button"
          onClick={() => setSelectedDate(shiftDateKey(selectedDate, 1))}
          aria-label="次の日"
          className="rounded-full p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          ▶
        </button>
      </div>

      {exerciseIds.length > 0 && (
        <div className="flex items-center justify-between px-1 text-xs text-slate-400">
          <span>
            {exerciseIds.length}種目・{totalSets}セット
          </span>
          <Link
            href="/workout/select"
            className="font-semibold text-violet-600 dark:text-violet-400"
          >
            種目を追加・編集
          </Link>
        </div>
      )}

      {exerciseIds.length === 0 ? (
        <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center dark:border-slate-700 dark:bg-slate-900">
          <span className="text-3xl">🏋️</span>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            この日のワークアウトはまだありません
          </p>
          <Link
            href="/workout/select"
            className="rounded-full bg-violet-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-violet-500"
          >
            種目を追加する
          </Link>
        </div>
      ) : (
        <div className="space-y-3">
          {exerciseIds.map((id) => (
            <ExerciseCard key={id} date={selectedDate} exerciseId={id} sets={day[id]} />
          ))}
        </div>
      )}
    </div>
  );
}
