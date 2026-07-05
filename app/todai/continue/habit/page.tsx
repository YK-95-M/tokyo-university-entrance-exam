import { PageShell } from "@/components/todai/PageShell";
import { DiagramCard } from "@/components/todai/DiagramCard";
import { MetaphorBox } from "@/components/todai/MetaphorBox";
import { TryIt } from "@/components/todai/TryIt";
import { Quiz } from "@/components/todai/Quiz";

export const metadata = { title: "モチベに頼らない仕組み | 東大攻略クエスト" };

export default function Page() {
  return (
    <PageShell sectionSlug="continue" pageSlug="habit">
      <DiagramCard caption="習慣化のループ：トリガー → 行動 → ごほうび">
        <svg viewBox="0 0 300 100" className="h-auto w-full max-w-md">
          {[
            { x: 40, label: "トリガー", sub: "帰宅して着替える", icon: "⏰" },
            { x: 150, label: "行動", sub: "机に座って開く", icon: "📖" },
            { x: 260, label: "ごほうび", sub: "小さな達成感", icon: "✅" },
          ].map((n, i) => (
            <g key={n.label}>
              <circle cx={n.x} cy={40} r="26" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1.5" className="dark:fill-slate-800" />
              <text x={n.x} y={48} textAnchor="middle" fontSize="18">{n.icon}</text>
              <text x={n.x} y="78" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#334155" className="dark:fill-slate-300">
                {n.label}
              </text>
              <text x={n.x} y="90" textAnchor="middle" fontSize="7.5" fill="#64748b" className="dark:fill-slate-400">
                {n.sub}
              </text>
              {i < 2 && <text x={n.x + 55} y="45" fontSize="16" fill="#94a3b8">→</text>}
            </g>
          ))}
        </svg>
      </DiagramCard>

      <MetaphorBox>
        習慣化は<strong>歯みがき</strong>と同じ。「今日はやる気があるから磨く」なんて考えませんよね。
        時間・場所・トリガーを固定してしまえば、やる気という不安定な燃料に頼らずに続けられます。
      </MetaphorBox>

      <div className="space-y-2">
        <p className="text-xs font-bold tracking-wide text-slate-400">もう少しくわしく</p>
        <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          <li>
            <strong>モチベーションは水物</strong>。日によって上下するのが当たり前なので、
            それに頼る計画は最初から破綻しやすい設計です。
          </li>
          <li>
            「帰宅して着替えたら机に座る」のように、<strong>既存の行動にトリガーを紐付ける</strong>と、
            やる気に関係なく体が動くようになります。
          </li>
          <li>
            04章「進捗の測り方」やストリーク表示など、<strong>小さなごほうび（達成感）</strong>を毎回セットにすると
            ループが回りやすくなります。
          </li>
        </ul>
      </div>

      <TryIt label="やってみよう：自分の習慣ループを設計する">
        <Quiz
          questions={[
            {
              question: "習慣化のコツとして最も効果的なのは？",
              choices: [
                "毎日「今日はやる気があるか」を確認してから始める",
                "時間・場所・トリガーを固定して、やる気に関係なく始める",
                "気分が乗った日だけ長時間やる",
              ],
              correctIndex: 1,
              explanation:
                "やる気に頼らず、トリガーを固定して自動的に始まる仕組みを作るのが習慣化の基本です。",
            },
          ]}
        />
      </TryIt>
    </PageShell>
  );
}
