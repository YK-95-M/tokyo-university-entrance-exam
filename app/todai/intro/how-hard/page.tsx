import { PageShell } from "@/components/todai/PageShell";
import { DiagramCard } from "@/components/todai/DiagramCard";
import { MetaphorBox } from "@/components/todai/MetaphorBox";
import { TryIt } from "@/components/todai/TryIt";
import { Quiz } from "@/components/todai/Quiz";

export const metadata = { title: "東大合格ってどれくらい大変？ | 東大攻略クエスト" };

export default function Page() {
  return (
    <PageShell sectionSlug="intro" pageSlug="how-hard">
      <DiagramCard caption="ゼロから東大合格までの道のり（イメージ）">
        <svg viewBox="0 0 320 180" className="h-auto w-full max-w-md">
          <polygon
            points="10,170 90,40 160,170"
            fill="#94a3b8"
            className="dark:fill-slate-600"
          />
          <polygon
            points="150,170 230,20 310,170"
            fill="#64748b"
            className="dark:fill-slate-500"
          />
          <polygon points="215,55 230,20 245,55" fill="#f87171" />
          <text x="230" y="14" textAnchor="middle" fontSize="10" fill="#dc2626" fontWeight="bold">
            東大
          </text>
          <path
            d="M20 165 C 60 140, 70 100, 90 45 S 170 90, 230 25"
            fill="none"
            stroke="#10b981"
            strokeWidth="3"
            strokeDasharray="6 5"
          />
          {[
            { x: 20, y: 165, label: "今" },
            { x: 75, y: 110, label: "基礎固め" },
            { x: 140, y: 70, label: "応用" },
            { x: 195, y: 55, label: "過去問" },
          ].map((p) => (
            <g key={p.label}>
              <circle cx={p.x} cy={p.y} r="5" fill="#10b981" />
              <text
                x={p.x}
                y={p.y + 18}
                textAnchor="middle"
                fontSize="9"
                fill="#334155"
                className="dark:fill-slate-300"
              >
                {p.label}
              </text>
            </g>
          ))}
        </svg>
      </DiagramCard>

      <MetaphorBox>
        東大合格は、RPGでいう<strong>ラスボス</strong>です。強い。でも
        「雑魚敵を倒してレベルを上げ、装備を整え、ボスの弱点を研究してから挑む」という
        <strong>攻略手順そのものは決まっています</strong>。運ゲーではありません。
      </MetaphorBox>

      <div className="space-y-2">
        <p className="text-xs font-bold tracking-wide text-slate-400">
          ひとことで言うと
        </p>
        <p className="text-base font-semibold text-slate-800 dark:text-slate-100">
          ゼロからだと複数年がかりの長期戦。でも「今日の一歩」に分解すれば、迷わず進める。
        </p>
      </div>

      <div className="space-y-2">
        <p className="text-xs font-bold tracking-wide text-slate-400">
          もう少しくわしく
        </p>
        <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          <li>
            勉強習慣ゼロからのスタートなら、合格までは
            <strong>複数年かかるのが普通</strong>です。ここを隠しません。
          </li>
          <li>
            ただし、必要なのは魔法のような才能ではなく、
            <strong>正しいやり方 × 地頭の鍛え方 × 続ける仕組み</strong>の3点セット。
          </li>
          <li>
            この3点はすべて後の章（02・03・06）で具体的な手順として渡します。
            今は「攻略可能なゲームなんだ」と知るだけでOKです。
          </li>
        </ul>
      </div>

      <TryIt label="やってみよう：心構えチェック">
        <Quiz
          questions={[
            {
              question: "東大合格を目指すうえで、最初に必要なのは？",
              choices: [
                "生まれつきの才能",
                "攻略手順（やり方）を知ること",
                "1日15時間の猛勉強",
              ],
              correctIndex: 1,
              explanation:
                "才能や気合いより先に「正しいやり方」を知ることが最短ルートです。02章・03章で具体的に扱います。",
            },
          ]}
        />
      </TryIt>
    </PageShell>
  );
}
