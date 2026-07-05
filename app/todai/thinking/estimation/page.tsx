import { PageShell } from "@/components/todai/PageShell";
import { DiagramCard } from "@/components/todai/DiagramCard";
import { MetaphorBox } from "@/components/todai/MetaphorBox";
import { TryIt } from "@/components/todai/TryIt";
import { FermiEstimate } from "@/components/todai/FermiEstimate";

export const metadata = { title: "数感・推定 | 東大攻略クエスト" };

export default function Page() {
  return (
    <PageShell sectionSlug="thinking" pageSlug="estimation">
      <DiagramCard caption="買い物のざっくり暗算＝細かい計算の前に「だいたいこれくらい」を掴む">
        <svg viewBox="0 0 320 90" className="h-auto w-full max-w-md">
          <text x="45" y="50" fontSize="26" textAnchor="middle">🛒</text>
          <text x="45" y="75" fontSize="9" textAnchor="middle" fill="#334155" className="dark:fill-slate-300">
            買い物カゴ
          </text>
          <text x="115" y="45" fontSize="18" textAnchor="middle" fill="#94a3b8">≈</text>
          <text x="225" y="42" fontSize="13" textAnchor="middle" fontWeight="bold" fill="#1e293b" className="dark:fill-slate-100">
            「だいたい2,000円くらい」
          </text>
          <text x="225" y="60" fontSize="9" textAnchor="middle" fill="#334155" className="dark:fill-slate-300">
            レジ前に暗算した見積もり
          </text>
        </svg>
      </DiagramCard>

      <MetaphorBox>
        フェルミ推定は<strong>買い物かごの合計をレジ前にざっくり暗算する</strong>のと同じ感覚です。
        正確な数字は分からなくても、要素を分解してかけ算すれば「桁」は当てられます。
      </MetaphorBox>

      <div className="space-y-2">
        <p className="text-xs font-bold tracking-wide text-slate-400">もう少しくわしく</p>
        <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          <li>
            数感・推定は、<strong>検算</strong>（計算結果が明らかにおかしくないか気づく力）や、
            <strong>選択肢の絞り込み</strong>に直結します。
          </li>
          <li>
            鍛え方の定番が<strong>フェルミ推定</strong>：正確な統計を知らなくても、
            分かりやすい要素に分解してかけ合わせ、桁のオーダーを見積もる練習です。
          </li>
          <li>
            数学の答えが出たときに「この数字は現実的にありえる大きさか」と一呼吸置くクセをつけましょう。
          </li>
        </ul>
      </div>

      <TryIt label="やってみよう：フェルミ推定に挑戦">
        <FermiEstimate
          question="日本全国にあるマンホールの数は？"
          factors={[
            { label: "日本の人口（人）", placeholder: "例: 120000000" },
            { label: "人口1人あたりのマンホール数（目安）", placeholder: "例: 0.3" },
          ]}
          referenceNote="正確な統計値と一致しなくてOK。大事なのは『要素に分解してかけ算し、桁のオーダーを見積もる』という考え方そのものです。"
        />
      </TryIt>
    </PageShell>
  );
}
