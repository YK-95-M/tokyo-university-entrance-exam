import { PageShell } from "@/components/todai/PageShell";
import { DiagramCard } from "@/components/todai/DiagramCard";
import { MetaphorBox } from "@/components/todai/MetaphorBox";
import { TryIt } from "@/components/todai/TryIt";
import { MetacognitionForm } from "@/components/todai/MetacognitionForm";

export const metadata = { title: "メタ認知 | 東大攻略クエスト" };

export default function Page() {
  return (
    <PageShell sectionSlug="thinking" pageSlug="metacognition">
      <DiagramCard caption="試合のビデオを見返す＝『解けた／解けない』で終わらせない">
        <svg viewBox="0 0 300 90" className="h-auto w-full max-w-md">
          <rect x="20" y="20" width="120" height="50" rx="8" fill="#e0e7ff" className="dark:fill-indigo-950" />
          <text x="80" y="50" textAnchor="middle" fontSize="24">📺</text>
          <text x="80" y="82" textAnchor="middle" fontSize="9" fill="#334155" className="dark:fill-slate-300">試合の録画を見返す</text>
          <text x="160" y="50" fontSize="18" fill="#94a3b8">→</text>
          <rect x="180" y="20" width="100" height="50" rx="8" fill="#c7d2fe" className="dark:fill-indigo-900" />
          <text x="230" y="45" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#3730a3" className="dark:fill-indigo-100">
            なぜミスした？
          </text>
          <text x="230" y="58" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#3730a3" className="dark:fill-indigo-100">
            次どうする？
          </text>
        </svg>
      </DiagramCard>

      <MetaphorBox>
        メタ認知は<strong>地頭の親玉</strong>スキル。スポーツ選手が試合後にビデオを見返して
        「なぜあのプレーでミスしたか」を分析するのと同じで、
        「解けた／解けない」で終わらせず<strong>「なぜそう考えたか・どこで詰まったか」</strong>を振り返ります。
      </MetaphorBox>

      <div className="space-y-2">
        <p className="text-xs font-bold tracking-wide text-slate-400">もう少しくわしく</p>
        <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          <li>
            他の5つの地頭スキル（抽象化・分解・パターン認識・仮説思考・数感）は、
            <strong>メタ認知によって振り返られたときに初めて次に活きます。</strong>
          </li>
          <li>
            全科目・すべての伸び率を決める、最も重要な習慣です。
          </li>
          <li>
            やり方はシンプル：間違えた問題ごとに
            <strong>「①何を間違えた ②なぜ間違えた ③次どうする」</strong>の3行を書くだけ。
          </li>
        </ul>
      </div>

      <TryIt label="やってみよう：間違い直しテンプレ">
        <MetacognitionForm />
      </TryIt>
    </PageShell>
  );
}
