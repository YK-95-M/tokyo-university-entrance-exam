import { PageShell } from "@/components/todai/PageShell";
import { DiagramCard } from "@/components/todai/DiagramCard";
import { MetaphorBox } from "@/components/todai/MetaphorBox";
import { TryIt } from "@/components/todai/TryIt";
import { Quiz } from "@/components/todai/Quiz";

export const metadata = { title: "そもそも「勉強」とは | 東大攻略クエスト" };

export default function Page() {
  return (
    <PageShell sectionSlug="method" pageSlug="what-is-studying">
      <DiagramCard caption="勉強の3工程">
        <svg viewBox="0 0 320 100" className="h-auto w-full max-w-lg">
          {[
            { x: 10, label: "①インプット", sub: "読む・説明を聞く", color: "#93c5fd" },
            { x: 118, label: "②定着", sub: "思い出す・復習する", color: "#fbbf24" },
            { x: 226, label: "③アウトプット", sub: "問題を解く・書く", color: "#6ee7b7" },
          ].map((s, i) => (
            <g key={s.label}>
              <rect x={s.x} y={20} width={94} height={54} rx={12} fill={s.color} />
              <text x={s.x + 47} y={44} textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1e293b">
                {s.label}
              </text>
              <text x={s.x + 47} y={60} textAnchor="middle" fontSize="8" fill="#1e293b">
                {s.sub}
              </text>
              {i < 2 && (
                <text x={s.x + 100} y={52} fontSize="16" fill="#94a3b8">→</text>
              )}
            </g>
          ))}
          <text x="160" y="92" textAnchor="middle" fontSize="9" fill="#64748b" className="dark:fill-slate-400">
            苦手な人の多くは「①だけ」を繰り返している
          </text>
        </svg>
      </DiagramCard>

      <MetaphorBox>
        勉強は<strong>料理</strong>と同じ。①材料を仕入れる（インプット）→②下ごしらえして冷蔵庫で寝かせる（定着）→
        ③実際に調理して出す（アウトプット）。材料を仕入れるだけでは、料理は完成しません。
      </MetaphorBox>

      <div className="space-y-2">
        <p className="text-xs font-bold tracking-wide text-slate-400">ひとことで言うと</p>
        <p className="text-base font-semibold text-slate-800 dark:text-slate-100">
          「読む・聞く」だけで終わらせず、「思い出す」「解く」までワンセットにするのが勉強。
        </p>
      </div>

      <div className="space-y-2">
        <p className="text-xs font-bold tracking-wide text-slate-400">もう少しくわしく</p>
        <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          <li>
            勉強が苦手な人ほど、<strong>①インプット（読む・聞く）だけ</strong>で「勉強した」と感じがち。
            でも試験で問われるのは③アウトプットの力です。
          </li>
          <li>
            ②定着（思い出す練習）を飛ばすと、①で入れた知識はすぐ抜けます（次ページ「記憶のしくみ」で詳しく）。
          </li>
          <li>
            このサイトの02章・03章は、すべて「②定着」と「③アウトプット」を鍛えるための具体的な手順です。
          </li>
        </ul>
      </div>

      <TryIt label="やってみよう：3工程チェック">
        <Quiz
          questions={[
            {
              question: "参考書を1回読んだだけの状態は、どの工程まで終わっている？",
              choices: ["①インプットのみ", "②定着まで", "③アウトプットまで"],
              correctIndex: 0,
              explanation:
                "読んだだけでは①止まり。定着（思い出す）とアウトプット（解く）がまだ残っています。",
            },
          ]}
        />
      </TryIt>
    </PageShell>
  );
}
