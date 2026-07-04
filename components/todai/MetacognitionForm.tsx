"use client";

import { useEffect, useState } from "react";

type Entry = {
  id: number;
  mistake: string;
  why: string;
  next: string;
  date: string;
};

const KEY = "todai-metacognition-log-v1";

export function MetacognitionForm() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [mistake, setMistake] = useState("");
  const [why, setWhy] = useState("");
  const [next, setNext] = useState("");

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(KEY);
      // localStorageはサーバーに存在しないため、マウント後にクライアント側でのみ読み込む
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (raw) setEntries(JSON.parse(raw));
    } catch {
      // 読み込み失敗時は空リストのまま
    }
  }, []);

  const save = (list: Entry[]) => {
    setEntries(list);
    window.localStorage.setItem(KEY, JSON.stringify(list));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mistake.trim() || !why.trim() || !next.trim()) return;
    const entry: Entry = {
      id: Date.now(),
      mistake: mistake.trim(),
      why: why.trim(),
      next: next.trim(),
      date: new Date().toISOString().slice(0, 10),
    };
    save([entry, ...entries].slice(0, 20));
    setMistake("");
    setWhy("");
    setNext("");
  };

  return (
    <div className="space-y-5">
      <form onSubmit={submit} className="space-y-3">
        <label className="block text-sm">
          <span className="mb-1 block font-semibold text-slate-700 dark:text-slate-200">
            ① 何を間違えた？
          </span>
          <textarea
            value={mistake}
            onChange={(e) => setMistake(e.target.value)}
            placeholder="例: 二次関数の最大値を求める問題で、範囲を見落とした"
            className="w-full rounded-xl border border-slate-300 p-2 text-sm dark:border-slate-700 dark:bg-slate-900"
            rows={2}
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1 block font-semibold text-slate-700 dark:text-slate-200">
            ② なぜ間違えた？
          </span>
          <textarea
            value={why}
            onChange={(e) => setWhy(e.target.value)}
            placeholder="例: 定義域を確認するクセがなく、公式だけ当てはめた"
            className="w-full rounded-xl border border-slate-300 p-2 text-sm dark:border-slate-700 dark:bg-slate-900"
            rows={2}
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1 block font-semibold text-slate-700 dark:text-slate-200">
            ③ 次どうする？
          </span>
          <textarea
            value={next}
            onChange={(e) => setNext(e.target.value)}
            placeholder="例: 最大最小の問題は必ず最初にグラフと定義域を書く"
            className="w-full rounded-xl border border-slate-300 p-2 text-sm dark:border-slate-700 dark:bg-slate-900"
            rows={2}
          />
        </label>
        <button
          type="submit"
          className="rounded-full bg-slate-900 px-5 py-2 text-sm font-bold text-white hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white"
        >
          記録する
        </button>
      </form>

      {entries.length > 0 && (
        <div>
          <p className="mb-2 text-xs font-bold tracking-wide text-slate-400">
            これまでの振り返り（この端末に保存）
          </p>
          <ul className="space-y-2">
            {entries.map((e) => (
              <li
                key={e.id}
                className="rounded-xl border border-slate-200 bg-white p-3 text-xs dark:border-slate-800 dark:bg-slate-900"
              >
                <p className="mb-1 text-[10px] text-slate-400">{e.date}</p>
                <p>
                  <span className="font-bold text-rose-600 dark:text-rose-400">
                    間違い:
                  </span>{" "}
                  {e.mistake}
                </p>
                <p>
                  <span className="font-bold text-amber-600 dark:text-amber-400">
                    原因:
                  </span>{" "}
                  {e.why}
                </p>
                <p>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">
                    次の一手:
                  </span>{" "}
                  {e.next}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
