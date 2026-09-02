"use client";

import { EXERCISE_MAP, CATEGORY_LABELS } from "@/lib/workout/exercises";
import { useWorkout, type SetEntry } from "@/lib/workout/store";

export function ExerciseCard({
  date,
  exerciseId,
  sets,
}: {
  date: string;
  exerciseId: string;
  sets: SetEntry[];
}) {
  const { addSet, updateSet, removeSet, removeExercise } = useWorkout();
  const exercise = EXERCISE_MAP[exerciseId];
  if (!exercise) return null;

  const lastSet = sets[sets.length - 1];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-xl dark:bg-violet-500/10">
            {exercise.icon}
          </span>
          <div>
            <p className="font-semibold text-slate-900 dark:text-slate-50">{exercise.name}</p>
            <p className="text-xs text-slate-400">{CATEGORY_LABELS[exercise.category]}</p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => removeExercise(date, exerciseId)}
          aria-label={`${exercise.name}を削除`}
          className="rounded-full p-1.5 text-slate-300 hover:bg-slate-100 hover:text-rose-500 dark:text-slate-600 dark:hover:bg-slate-800"
        >
          🗑
        </button>
      </div>

      {sets.length > 0 && (
        <div className="mt-3 grid grid-cols-[1.5rem_1fr_1fr_1.75rem] items-center gap-x-2 gap-y-2">
          <span className="text-[11px] font-medium text-slate-400" />
          <span className="text-[11px] font-medium text-slate-400">重量 (kg)</span>
          <span className="text-[11px] font-medium text-slate-400">レップ</span>
          <span />
          {sets.map((set, i) => (
            <SetRow
              key={set.id}
              index={i + 1}
              set={set}
              onChange={(patch) => updateSet(date, exerciseId, set.id, patch)}
              onRemove={() => removeSet(date, exerciseId, set.id)}
            />
          ))}
        </div>
      )}

      <button
        type="button"
        onClick={() =>
          addSet(
            date,
            exerciseId,
            lastSet ? { weight: lastSet.weight, reps: lastSet.reps } : undefined
          )
        }
        className="mt-3 w-full rounded-xl border border-dashed border-slate-300 py-2 text-sm font-semibold text-violet-600 hover:border-violet-300 hover:bg-violet-50 dark:border-slate-700 dark:text-violet-400 dark:hover:bg-violet-500/10"
      >
        ＋ セットを追加
      </button>
    </div>
  );
}

function SetRow({
  index,
  set,
  onChange,
  onRemove,
}: {
  index: number;
  set: SetEntry;
  onChange: (patch: Partial<Pick<SetEntry, "weight" | "reps">>) => void;
  onRemove: () => void;
}) {
  return (
    <>
      <span className="text-sm font-semibold text-slate-400">{index}</span>
      <input
        type="text"
        inputMode="decimal"
        value={set.weight}
        onChange={(e) => onChange({ weight: e.target.value })}
        placeholder="0"
        className="w-full rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-center text-sm tabular-nums focus:border-violet-400 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:focus:bg-slate-900"
      />
      <input
        type="text"
        inputMode="numeric"
        value={set.reps}
        onChange={(e) => onChange({ reps: e.target.value })}
        placeholder="0"
        className="w-full rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-center text-sm tabular-nums focus:border-violet-400 focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:focus:bg-slate-900"
      />
      <button
        type="button"
        onClick={onRemove}
        aria-label="セットを削除"
        className="text-slate-300 hover:text-rose-500 dark:text-slate-600"
      >
        ×
      </button>
    </>
  );
}
