"use client";

import { useState } from "react";

export type Flashcard = { front: string; back: string };

export function FlashcardDeck({ cards }: { cards: Flashcard[] }) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState<Record<number, boolean>>({});

  const card = cards[index];
  const knownCount = Object.values(known).filter(Boolean).length;

  const goNext = () => {
    setFlipped(false);
    setIndex((i) => (i + 1) % cards.length);
  };

  const mark = (isKnown: boolean) => {
    setKnown((prev) => ({ ...prev, [index]: isKnown }));
    goNext();
  };

  return (
    <div className="space-y-4">
      <button
        type="button"
        onClick={() => setFlipped((f) => !f)}
        className="flex min-h-36 w-full items-center justify-center rounded-2xl border-2 border-slate-300 bg-white p-6 text-center shadow-sm transition hover:shadow-md dark:border-slate-700 dark:bg-slate-900"
      >
        <p className="text-base font-semibold text-slate-800 dark:text-slate-100">
          {flipped ? card.back : card.front}
        </p>
      </button>
      <p className="text-center text-xs text-slate-400">
        {flipped ? "答え（もう一度タップで表に戻る）" : "タップして答えを見る"} ・
        カード {index + 1}/{cards.length}
      </p>
      <div className="flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => mark(false)}
          className="rounded-full border border-rose-300 bg-rose-50 px-4 py-2 text-sm font-semibold text-rose-700 hover:bg-rose-100 dark:border-rose-800 dark:bg-rose-950/40 dark:text-rose-300"
        >
          あやしい
        </button>
        <button
          type="button"
          onClick={() => mark(true)}
          className="rounded-full border border-emerald-300 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 hover:bg-emerald-100 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300"
        >
          わかる！
        </button>
      </div>
      <p className="text-center text-xs text-slate-400">
        「わかる」{knownCount}/{cards.length}
      </p>
    </div>
  );
}
