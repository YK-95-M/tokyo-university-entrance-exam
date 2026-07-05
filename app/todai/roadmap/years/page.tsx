import { PageShell } from "@/components/todai/PageShell";
import { MetaphorBox } from "@/components/todai/MetaphorBox";
import { TryIt } from "@/components/todai/TryIt";
import { YearPlanSimulator } from "@/components/todai/YearPlanSimulator";

export const metadata = { title: "何年計画にする？ | 東大攻略クエスト" };

export default function Page() {
  return (
    <PageShell sectionSlug="roadmap" pageSlug="years">
      <MetaphorBox>
        攻略年数を決めるのは、<strong>RPGで「何レベルまで上げてからボスに挑むか」</strong>を決めるのと同じ。
        年数を延ばせば余裕が出ますが、間延びしてモチベが切れるリスクも上がります。
        自分の生活リズムに合う現実的なペースをまず体感してみましょう。
      </MetaphorBox>

      <div className="space-y-2">
        <p className="text-xs font-bold tracking-wide text-slate-400">もう少しくわしく</p>
        <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          <li>
            01章「ゴールから逆算」で出したギャップを、<strong>年数 × 週の学習時間</strong>という
            具体的な数字に変換するのがこのページの目的です。
          </li>
          <li>
            数字はあくまで目安。大事なのは「無理なく続けられるペースか」を先に確認することです。
          </li>
        </ul>
      </div>

      <TryIt label="やってみよう：攻略年数シミュレータ">
        <YearPlanSimulator />
      </TryIt>
    </PageShell>
  );
}
