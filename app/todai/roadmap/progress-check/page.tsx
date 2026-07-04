import { PageShell } from "@/components/todai/PageShell";
import { MetaphorBox } from "@/components/todai/MetaphorBox";
import { TryIt } from "@/components/todai/TryIt";
import { ScoreTrendChart } from "@/components/todai/ScoreTrendChart";

export const metadata = { title: "進捗の測り方 | 東大攻略クエスト" };

export default function Page() {
  return (
    <PageShell sectionSlug="roadmap" pageSlug="progress-check">
      <MetaphorBox>
        模試・過去問の得点推移は<strong>キャラクターのレベルグラフ</strong>のようなもの。
        1回1回の点数の良し悪しに一喜一憂するより、
        <strong>線がどちらに向かっているか</strong>を見るのが健全な使い方です。
      </MetaphorBox>

      <div className="space-y-2">
        <p className="text-xs font-bold tracking-wide text-slate-400">もう少しくわしく</p>
        <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          <li>
            模試・過去問を受けたら、必ず得点を記録して<strong>推移をグラフで見える化</strong>しましょう。
          </li>
          <li>
            停滞期があっても焦らないこと（06章「スランプ・停滞期の乗り越え方」で詳しく扱います）。
          </li>
          <li>
            点数だけでなく、03章の「メタ認知（間違い直しテンプレ）」とセットで振り返ると、
            次に伸ばすべきポイントが具体的に見えてきます。
          </li>
        </ul>
      </div>

      <TryIt label="やってみよう：自分の得点推移を記録する">
        <ScoreTrendChart />
      </TryIt>
    </PageShell>
  );
}
