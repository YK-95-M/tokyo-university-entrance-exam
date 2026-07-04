"use client";

import { useState } from "react";

export type FermiFactor = {
  label: string;
  placeholder: string;
};

export function FermiEstimate({
  question,
  factors,
  referenceNote,
}: {
  question: string;
  factors: FermiFactor[];
  referenceNote: string;
}) {
  const [values, setValues] = useState<string[]>(factors.map(() => ""));

  const numbers = values.map((v) => parseFloat(v));
  const filled = numbers.every((n) => !Number.isNaN(n) && n > 0);
  const product = filled
    ? numbers.reduce((acc, n) => acc * n, 1)
    : undefined;

  return (
    <div className="space-y-4">
      <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
        お題: {question}
      </p>
      <div className="grid gap-2 sm:grid-cols-2">
        {factors.map((f, i) => (
          <label key={f.label} className="block text-xs">
            <span className="mb-1 block font-semibold text-slate-600 dark:text-slate-300">
              {f.label}
            </span>
            <input
              inputMode="decimal"
              value={values[i]}
              onChange={(e) => {
                const next = [...values];
                next[i] = e.target.value;
                setValues(next);
              }}
              placeholder={f.placeholder}
              className="w-full rounded-lg border border-slate-300 p-2 text-sm dark:border-slate-700 dark:bg-slate-900"
            />
          </label>
        ))}
      </div>
      <div className="rounded-xl bg-slate-100 p-3 text-center dark:bg-slate-800">
        <p className="text-xs text-slate-500 dark:text-slate-400">
          あなたの推定値
        </p>
        <p className="text-xl font-bold text-slate-900 dark:text-slate-50">
          {product !== undefined
            ? `約 ${product.toLocaleString(undefined, {
                maximumSignificantDigits: 3,
              })}`
            : "— 全部の欄を埋めると計算されます"}
        </p>
      </div>
      {product !== undefined && (
        <p className="rounded-lg bg-sky-50 p-3 text-xs leading-relaxed text-sky-900 dark:bg-sky-950/40 dark:text-sky-100">
          {referenceNote}
        </p>
      )}
    </div>
  );
}
