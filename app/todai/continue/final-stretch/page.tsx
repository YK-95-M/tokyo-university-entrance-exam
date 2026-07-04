import { PageShell } from "@/components/todai/PageShell";
import { DiagramCard } from "@/components/todai/DiagramCard";
import { MetaphorBox } from "@/components/todai/MetaphorBox";
import { TryIt } from "@/components/todai/TryIt";

export const metadata = { title: "直前期の過ごし方 | 東大攻略クエスト" };

export default function Page() {
  return (
    <PageShell sectionSlug="continue" pageSlug="final-stretch">
      <DiagramCard caption="直前期はラスボス直前の立ち回り：新しい武器を持たず、装備の手入れに集中する">
        <svg viewBox="0 0 300 90" className="h-auto w-full max-w-md">
          <text x="60" y="50" fontSize="26" textAnchor="middle">🎒</text>
          <text x="60" y="75" fontSize="9" textAnchor="middle" fill="#334155" className="dark:fill-slate-300">
            使い慣れた装備の手入れ
          </text>
          <text x="150" y="45" fontSize="18" textAnchor="middle" fill="#94a3b8">✕</text>
          <text x="240" y="50" fontSize="26" textAnchor="middle">🗡️</text>
          <text x="240" y="75" fontSize="9" textAnchor="middle" fill="#334155" className="dark:fill-slate-300">
            新しい武器に手を出す
          </text>
        </svg>
      </DiagramCard>

      <MetaphorBox>
        直前期にラスボス戦を前にして<strong>新しい武器（新しい参考書・新しい解法）</strong>
        に手を出すのは危険です。慣れない装備は事故のもと。
        直前期は「今まで積み上げた装備の手入れ」に徹しましょう。
      </MetaphorBox>

      <div className="space-y-2">
        <p className="text-xs font-bold tracking-wide text-slate-400">もう少しくわしく</p>
        <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          <li>
            <strong>新しい参考書・新しい範囲に手を出さない。</strong>
            今まで使ってきた教材・過去問の総復習に集中するのが基本方針です。
          </li>
          <li>
            間違えた問題の振り返り（03章「メタ認知」）ノートを見返し、
            自分の弱点パターンを最終確認しておきます。
          </li>
          <li>
            生活リズムを本番の試験時間に合わせて調整し、
            当日と同じ時間帯に頭が働くようにしておきましょう。
          </li>
          <li>
            体調管理を最優先に。直前期の無理な詰め込みより、
            本番でベストコンディションを出せることのほうが得点への影響が大きいです。
          </li>
        </ul>
      </div>

      <TryIt label="やってみよう：直前期チェックリスト">
        <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <li>☐ 新しい教材に手を出していないか</li>
          <li>☐ 間違い直しノートを見返したか</li>
          <li>☐ 生活リズムを本番時間に合わせているか</li>
          <li>☐ 睡眠・体調を優先できているか</li>
        </ul>
      </TryIt>
    </PageShell>
  );
}
