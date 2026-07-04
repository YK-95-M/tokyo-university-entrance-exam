import { PageShell } from "@/components/todai/PageShell";
import { DiagramCard } from "@/components/todai/DiagramCard";
import { MetaphorBox } from "@/components/todai/MetaphorBox";
import { TryIt } from "@/components/todai/TryIt";

export const metadata = { title: "集中・スキマ時間の作り方 | 東大攻略クエスト" };

const SLOTS = [
  { label: "通勤・通学", time: "往復40分", icon: "🚃" },
  { label: "昼休み", time: "15分", icon: "🍱" },
  { label: "寝る前", time: "20分", icon: "🛏️" },
  { label: "早起き", time: "30分", icon: "☀️" },
];

export default function Page() {
  return (
    <PageShell sectionSlug="method" pageSlug="time-hacks">
      <DiagramCard caption="1日に散らばる「スキマ」を集めると、まとまった学習時間になる">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {SLOTS.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center rounded-xl border border-slate-200 bg-white p-3 text-center dark:border-slate-800 dark:bg-slate-900"
            >
              <span className="text-2xl">{s.icon}</span>
              <span className="mt-1 text-xs font-bold text-slate-800 dark:text-slate-100">
                {s.label}
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400">{s.time}</span>
            </div>
          ))}
        </div>
      </DiagramCard>

      <MetaphorBox>
        スキマ時間は<strong>ゲームの「ちょっとした周回」</strong>と同じ。
        まとまった1時間を狙って結局取れないより、5〜20分の周回を1日に何回も回すほうが、
        社会人には現実的で続けやすいです。
      </MetaphorBox>

      <div className="space-y-2">
        <p className="text-xs font-bold tracking-wide text-slate-400">もう少しくわしく</p>
        <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          <li>
            通勤・昼休み・寝る前・早起きなど、<strong>すでにある「隙間」を先に洗い出す</strong>のが最初の一歩。
          </li>
          <li>
            スキマ時間には「暗記系（単語・公式の想起）」が特に向いています。腰を据えた思考が必要な問題は、
            まとまった時間が取れる休日などに回すと効率的です。
          </li>
          <li>
            <strong>「やる時間を先に決めておく」</strong>ことが重要。「時間が空いたらやろう」は高確率でやりません。
            スケジュール帳やアラームに「この時間は勉強」と先に埋めてしまいましょう。
          </li>
          <li>
            スマホの通知を切る、勉強アプリだけ開いた状態で電車に乗るなど、
            「始めるまでの摩擦」を減らす工夫も効果的です。
          </li>
        </ul>
      </div>

      <TryIt label="やってみよう：自分のスキマ時間を洗い出す">
        <p className="text-sm text-slate-600 dark:text-slate-300">
          今日1日を振り返って、5分以上の「スキマ」がどこにあったか3つ書き出してみましょう。
          それぞれに「何を学習するか」を先に割り当てるのが、社会人の時間術の基本です。
        </p>
      </TryIt>
    </PageShell>
  );
}
