import { PageShell } from "@/components/todai/PageShell";
import { DiagramCard } from "@/components/todai/DiagramCard";
import { MetaphorBox } from "@/components/todai/MetaphorBox";
import { TryIt } from "@/components/todai/TryIt";
import { QuestMap } from "@/components/todai/QuestMap";
import { StreakBadge } from "@/components/todai/StreakBadge";

export const metadata = { title: "攻略マップの見方 | 東大攻略クエスト" };

export default function Page() {
  return (
    <PageShell sectionSlug="intro" pageSlug="map-guide">
      <DiagramCard caption="マップの記号の意味">
        <svg viewBox="0 0 300 90" className="h-auto w-full max-w-md">
          <circle cx="30" cy="25" r="14" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2" />
          <text x="30" y="55" textAnchor="middle" fontSize="9" fill="#334155" className="dark:fill-slate-300">
            未着手
          </text>
          <circle cx="110" cy="25" r="14" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2" />
          <text x="110" y="55" textAnchor="middle" fontSize="9" fill="#334155" className="dark:fill-slate-300">
            挑戦中
          </text>
          <circle cx="190" cy="25" r="14" fill="#10b981" stroke="#059669" strokeWidth="2" />
          <text x="190" y="12" textAnchor="middle" fontSize="10" fill="white">✓</text>
          <text x="190" y="55" textAnchor="middle" fontSize="9" fill="#334155" className="dark:fill-slate-300">
            クリア
          </text>
          <text x="260" y="30" fontSize="24">👹</text>
          <text x="260" y="55" textAnchor="middle" fontSize="9" fill="#334155" className="dark:fill-slate-300">
            ラスボス
          </text>
        </svg>
      </DiagramCard>

      <MetaphorBox>
        このサイトは、ゲームの「ワールドマップ」と同じ発想です。今どこにいて、
        次に何をすればよく、ラスボス（東大合格）までどれくらいかが、常に一目で分かるようにしてあります。
      </MetaphorBox>

      <div className="space-y-2">
        <p className="text-xs font-bold tracking-wide text-slate-400">もう少しくわしく</p>
        <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          <li>
            <strong>クエストマップ</strong>（下）: 7つの章がノードとして並び、灰色＝未着手、
            黄色＝挑戦中、緑＝クリア。クリックでその章に飛べます。
          </li>
          <li>
            <strong>スキルツリー</strong>: 科目ページで単元の積み上げ順を「技の習得」として表示します。
          </li>
          <li>
            <strong>進捗・連続日数（ストリーク）</strong>: 右上に表示。ページを開くたびに記録され、
            継続を後押しします。
          </li>
          <li>
            記録はすべて<strong>この端末のブラウザ内だけ</strong>に保存されます（ログイン不要・サーバー送信なし）。
          </li>
        </ul>
      </div>

      <TryIt label="やってみよう：自分のクエストマップを見る">
        <QuestMap />
        <div className="mt-3 flex justify-center">
          <StreakBadge />
        </div>
      </TryIt>
    </PageShell>
  );
}
