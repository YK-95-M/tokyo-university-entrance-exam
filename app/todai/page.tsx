import Link from "next/link";
import { QuestMap } from "@/components/todai/QuestMap";
import { MetaphorBox } from "@/components/todai/MetaphorBox";
import { SECTIONS } from "@/lib/content/registry";

export const metadata = {
  title: "東大攻略クエスト | 社会人ゼロから東大合格",
  description:
    "勉強習慣ゼロの社会人が、東大合格という巨大なゴールを攻略可能なクエストに分解して進むための学習サイト。",
};

export default function TodaiTopPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <div className="mb-8 text-center">
        <p className="mb-3 inline-block rounded-full bg-slate-900 px-4 py-1 text-xs font-bold text-white dark:bg-slate-100 dark:text-slate-900">
          社会人ゼロから東大合格クエスト
        </p>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-50 sm:text-4xl">
          東大合格は、ラスボス。
          <br className="sm:hidden" />
          でも攻略手順は決まっている。
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
          勉強が久しく苦手だった社会人でも、正しいやり方・地頭の鍛え方・続ける仕組みがあれば、
          巨大なゴールを&ldquo;今日の一歩&rdquo;に分解して進める。まずは下のクエストマップから。
        </p>
      </div>

      <div className="mb-8">
        <QuestMap />
      </div>

      <div className="mb-10 grid gap-4 sm:grid-cols-2">
        <MetaphorBox>
          東大受験はRPGでいう<strong>ラスボス攻略</strong>。共通テストは本戦前の中ボス、
          二次試験がラスボス戦本体。各科目はダンジョン、各単元はその中の部屋。
          そして「地頭」はキャラの基礎能力値——装備（勉強法）とは別に、鍛えれば伸びる素の強さです。
        </MetaphorBox>
        <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
          <p className="mb-2 text-xs font-bold tracking-wide text-slate-400">
            正直に言っておくこと
          </p>
          <ul className="space-y-1.5 text-sm text-slate-600 dark:text-slate-300">
            <li>・ゼロからだと複数年がかりの長期戦になる</li>
            <li>・「地頭」は確かに要る。でも生まれつき固定ではない</li>
            <li>・勝負を決めるのは才能より「正しいやり方 × 地頭の鍛え方 × 続ける仕組み」</li>
          </ul>
        </div>
      </div>

      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-bold text-slate-900 dark:text-slate-50">
          全クエスト一覧
        </h2>
        <Link
          href="/todai/intro/how-hard"
          className="text-sm font-semibold text-emerald-700 hover:underline dark:text-emerald-400"
        >
          はじめての方はここから →
        </Link>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {SECTIONS.map((s) => (
          <Link
            key={s.id}
            href={`/todai/${s.slug}`}
            className="rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-slate-400 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-600"
          >
            <p className="text-xs font-bold tracking-wide text-slate-400">
              {s.id} ・ {s.kicker}
            </p>
            <p className="mt-1 font-bold text-slate-900 dark:text-slate-100">
              {s.title}
            </p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              {s.summary}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
