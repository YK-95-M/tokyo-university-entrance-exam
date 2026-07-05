import { PageShell } from "@/components/todai/PageShell";
import { DiagramCard } from "@/components/todai/DiagramCard";
import { MetaphorBox } from "@/components/todai/MetaphorBox";
import { TryIt } from "@/components/todai/TryIt";
import { Quiz } from "@/components/todai/Quiz";
import { TermTooltip } from "@/components/todai/TermTooltip";

export const metadata = { title: "入試の全体像 | 東大攻略クエスト" };

function Box({ x, y, w, label, sub }: { x: number; y: number; w: number; label: string; sub?: string }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={54} rx={10} fill="#fff" stroke="#94a3b8" strokeWidth="2" className="dark:fill-slate-800" />
      <text x={x + w / 2} y={y + 24} textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1e293b" className="dark:fill-slate-100">
        {label}
      </text>
      {sub && (
        <text x={x + w / 2} y={y + 40} textAnchor="middle" fontSize="9" fill="#64748b" className="dark:fill-slate-400">
          {sub}
        </text>
      )}
    </g>
  );
}

export default function Page() {
  return (
    <PageShell sectionSlug="enemy" pageSlug="overview">
      <DiagramCard caption="東大入試の全体フロー（前期日程）">
        <svg viewBox="0 0 340 80" className="h-auto w-full max-w-lg">
          <Box x={5} y={13} w={90} label="共通テスト" sub="1月・多教科" />
          <text x={103} y={45} fontSize="16" fill="#94a3b8">→</text>
          <Box x={115} y={13} w={90} label="第1段階選抜" sub="通称：足切り" />
          <text x={213} y={45} fontSize="16" fill="#94a3b8">→</text>
          <Box x={225} y={13} w={110} label="第2次学力試験" sub="2月・全問記述" />
        </svg>
      </DiagramCard>

      <MetaphorBox>
        共通テストは<strong>本戦（二次試験）に進むための中ボス／関門</strong>。
        ここを突破しないと、そもそも二次というラスボス戦本体に挑めません。
        でも中ボス自体の強さは、ラスボスほどではありません。
      </MetaphorBox>

      <div className="space-y-2">
        <p className="text-xs font-bold tracking-wide text-slate-400">もう少しくわしく</p>
        <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          <li>
            まず1月に<strong>大学入学共通テスト</strong>を受験。多教科・多科目を広く問われます。
          </li>
          <li>
            その成績で
            <TermTooltip term="第1段階選抜（足切り）">
              共通テストの点数だけで、二次試験に進める人数を絞る仕組み。科類ごとに基準が異なる。
            </TermTooltip>
            が行われ、通過者だけが二次に進めます。
          </li>
          <li>
            2月に<strong>第2次学力試験（二次）</strong>。ここが配点の主役で、
            全問記述式という東大最大の特徴があります（詳しくは次の「配点のカラクリ」で）。
          </li>
        </ul>
      </div>

      <TryIt label="やってみよう：流れの確認クイズ">
        <Quiz
          questions={[
            {
              question: "東大入試で「本丸」にあたるのはどこ？",
              choices: ["共通テスト", "第2次学力試験（二次）", "出願書類"],
              correctIndex: 1,
              explanation:
                "配点の大部分は二次試験。共通テストは足切りのための関門という位置づけです。",
            },
          ]}
        />
      </TryIt>
    </PageShell>
  );
}
