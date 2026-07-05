export type SkillStage = {
  stage: string;
  skills: string[];
};

export function SkillTree({ stages }: { stages: SkillStage[] }) {
  return (
    <div className="flex gap-3 overflow-x-auto pb-2 sm:gap-4">
      {stages.map((s, i) => (
        <div key={s.stage} className="flex items-center gap-3 sm:gap-4">
          <div className="w-40 shrink-0 rounded-2xl border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-900 sm:w-48">
            <p className="mb-2 text-[11px] font-bold tracking-wide text-slate-400">
              STAGE {i + 1}
            </p>
            <p className="mb-2 text-sm font-bold text-slate-800 dark:text-slate-100">
              {s.stage}
            </p>
            <ul className="space-y-1">
              {s.skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-start gap-1.5 text-xs text-slate-600 dark:text-slate-300"
                >
                  <span className="mt-0.5 text-emerald-500" aria-hidden>
                    ✓
                  </span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          {i < stages.length - 1 && (
            <span
              aria-hidden
              className="shrink-0 text-xl text-slate-300 dark:text-slate-700"
            >
              →
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
