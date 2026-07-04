"use client";

import { useState } from "react";

export type QuizQuestion = {
  question: string;
  choices: string[];
  correctIndex: number;
  explanation: string;
};

export function Quiz({ questions }: { questions: QuizQuestion[] }) {
  const [answers, setAnswers] = useState<(number | null)[]>(
    questions.map(() => null)
  );

  const select = (qi: number, ci: number) => {
    setAnswers((prev) => {
      if (prev[qi] !== null) return prev;
      const next = [...prev];
      next[qi] = ci;
      return next;
    });
  };

  const answeredCount = answers.filter((a) => a !== null).length;
  const correctCount = answers.filter(
    (a, i) => a === questions[i].correctIndex
  ).length;

  return (
    <div className="space-y-5">
      {questions.map((q, qi) => {
        const chosen = answers[qi];
        const isAnswered = chosen !== null;
        return (
          <div key={qi} className="space-y-2">
            <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
              Q{qi + 1}. {q.question}
            </p>
            <div className="grid gap-2 sm:grid-cols-2">
              {q.choices.map((c, ci) => {
                const isCorrect = ci === q.correctIndex;
                const isChosen = chosen === ci;
                let style =
                  "border-slate-200 bg-white hover:border-emerald-400 dark:border-slate-700 dark:bg-slate-900";
                if (isAnswered && isCorrect) {
                  style =
                    "border-emerald-400 bg-emerald-50 dark:bg-emerald-950/40";
                } else if (isAnswered && isChosen && !isCorrect) {
                  style = "border-rose-400 bg-rose-50 dark:bg-rose-950/40";
                }
                return (
                  <button
                    key={ci}
                    type="button"
                    disabled={isAnswered}
                    onClick={() => select(qi, ci)}
                    className={`rounded-xl border px-3 py-2 text-left text-sm transition disabled:cursor-default ${style}`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
            {isAnswered && (
              <p
                className={`rounded-lg px-3 py-2 text-xs leading-relaxed ${
                  chosen === q.correctIndex
                    ? "bg-emerald-50 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-200"
                    : "bg-rose-50 text-rose-800 dark:bg-rose-950/40 dark:text-rose-200"
                }`}
              >
                {chosen === q.correctIndex ? "正解！ " : "おしい！ "}
                {q.explanation}
              </p>
            )}
          </div>
        );
      })}
      <p className="text-right text-xs text-slate-400">
        {answeredCount}/{questions.length} 問回答 ・ 正解 {correctCount}
      </p>
    </div>
  );
}
