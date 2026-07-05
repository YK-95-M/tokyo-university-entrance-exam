import { PageShell } from "@/components/todai/PageShell";
import { DiagramCard } from "@/components/todai/DiagramCard";
import { MetaphorBox } from "@/components/todai/MetaphorBox";
import { TryIt } from "@/components/todai/TryIt";
import { GapCalculator } from "@/components/todai/GapCalculator";

export const metadata = { title: "ゴールから逆算 | 東大攻略クエスト" };

export default function Page() {
  return (
    <PageShell sectionSlug="enemy" pageSlug="reverse-plan">
      <DiagramCard caption="今の自分と合格ラインの間のギャップ">
        <svg viewBox="0 0 300 90" className="h-auto w-full max-w-lg">
          <rect x="10" y="20" width="280" height="20" rx="10" fill="#e2e8f0" className="dark:fill-slate-700" />
          <rect x="10" y="20" width="90" height="20" rx="10" fill="#94a3b8" />
          <line x1="220" y1="10" x2="220" y2="50" stroke="#dc2626" strokeWidth="2" />
          <text x="220" y="8" textAnchor="middle" fontSize="9" fill="#dc2626" fontWeight="bold">
            合格ライン
          </text>
          <text x="55" y="34" textAnchor="middle" fontSize="9" fill="white" fontWeight="bold">
            今の自分
          </text>
          <text x="150" y="65" textAnchor="middle" fontSize="10" fill="#334155" className="dark:fill-slate-300">
            この差＝埋めるべきクエスト量
          </text>
        </svg>
      </DiagramCard>

      <MetaphorBox>
        RPGでも、いきなりラスボスの強さを見て絶望する必要はありません。
        <strong>「今の自分のレベル」と「ラスボスの強さ」の差</strong>さえ分かれば、
        あとはその差を埋める経験値稼ぎ（学習計画）を組むだけです。
      </MetaphorBox>

      <div className="space-y-2">
        <p className="text-xs font-bold tracking-wide text-slate-400">もう少しくわしく</p>
        <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          <li>
            まず大まかな<strong>合格ラインの目安</strong>を知る（模試や過去問の合格者平均点などが参考になります）。
          </li>
          <li>
            次に<strong>今の自分の得点力</strong>を把握する（初回は過去問や模試を1回受けてみるのが早い）。
          </li>
          <li>
            その差が「埋めるべきギャップ」。これを04章で年数・週の学習時間に変換し、逆算した計画にします。
          </li>
        </ul>
      </div>

      <TryIt label="やってみよう：ギャップを計算する">
        <GapCalculator />
      </TryIt>
    </PageShell>
  );
}
