import { PageShell } from "@/components/todai/PageShell";
import { DiagramCard } from "@/components/todai/DiagramCard";
import { MetaphorBox } from "@/components/todai/MetaphorBox";
import { TryIt } from "@/components/todai/TryIt";
import { Quiz } from "@/components/todai/Quiz";

export const metadata = { title: "ノート・まとめの罠 | 東大攻略クエスト" };

export default function Page() {
  return (
    <PageShell sectionSlug="method" pageSlug="notes-trap">
      <DiagramCard caption="かけた時間と、身についた量は比例しない">
        <svg viewBox="0 0 300 130" className="h-auto w-full max-w-md">
          <text x="10" y="20" fontSize="9" fill="#334155" className="dark:fill-slate-300">きれいなノート作り</text>
          <rect x="10" y="26" width="220" height="16" fill="#fca5a5" rx="4" />
          <text x="235" y="38" fontSize="8" fill="#334155" className="dark:fill-slate-300">時間 大</text>
          <rect x="10" y="46" width="60" height="16" fill="#fca5a5" rx="4" opacity={0.6} />
          <text x="75" y="58" fontSize="8" fill="#334155" className="dark:fill-slate-300">定着 小</text>

          <text x="10" y="90" fontSize="9" fill="#334155" className="dark:fill-slate-300">思い出す練習（想起）</text>
          <rect x="10" y="96" width="100" height="16" fill="#6ee7b7" rx="4" />
          <text x="115" y="108" fontSize="8" fill="#334155" className="dark:fill-slate-300">時間 中</text>
          <rect x="10" y="116" width="95" height="10" fill="#6ee7b7" rx="4" opacity={0.9} />
        </svg>
      </DiagramCard>

      <MetaphorBox>
        きれいなノートを作る作業は、<strong>「勉強した気になるカロリーゼロ運動」</strong>に近いことがあります。
        手は動いていても、脳が「思い出す」努力をしていなければ、定着にはあまり効きません。
      </MetaphorBox>

      <div className="space-y-2">
        <p className="text-xs font-bold tracking-wide text-slate-400">もう少しくわしく</p>
        <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          <li>
            色ペンで丁寧にまとめ直す作業は「写す」だけの受動的な作業になりがちで、
            時間対効果（かけた時間に対する定着量）が悪いことが多いです。
          </li>
          <li>
            ノート作りが無意味というわけではなく、<strong>「後で見返して自力で思い出す」ために最小限使う</strong>
            のが正しい距離感です。まとめること自体が目的化しないように注意します。
          </li>
          <li>
            同じ時間を使うなら、<strong>問題を解く・何も見ずに説明してみる（想起）</strong>ほうが、
            一般的に定着効率は高くなります。
          </li>
        </ul>
      </div>

      <TryIt label="やってみよう：罠チェック">
        <Quiz
          questions={[
            {
              question: "定着への効率が最も高いのは？",
              choices: [
                "色ペンで丁寧にまとめ直す",
                "何も見ずに自力で説明・再現してみる",
                "教科書をそのまま書き写す",
              ],
              correctIndex: 1,
              explanation:
                "受動的な作業より、能動的に思い出す（想起する）作業のほうが定着効率が高いです。",
            },
          ]}
        />
      </TryIt>
    </PageShell>
  );
}
