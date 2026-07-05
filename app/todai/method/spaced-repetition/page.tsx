import { PageShell } from "@/components/todai/PageShell";
import { DiagramCard } from "@/components/todai/DiagramCard";
import { MetaphorBox } from "@/components/todai/MetaphorBox";
import { TryIt } from "@/components/todai/TryIt";
import { FlashcardDeck } from "@/components/todai/FlashcardDeck";

export const metadata = { title: "復習の黄金ルール | 東大攻略クエスト" };

const INTERVALS = ["当日", "1日後", "3日後", "1週間後", "2週間後", "1ヶ月後"];

export default function Page() {
  return (
    <PageShell sectionSlug="method" pageSlug="spaced-repetition">
      <DiagramCard caption="間隔をあけて繰り返す黄金パターン">
        <svg viewBox="0 0 360 90" className="h-auto w-full max-w-lg">
          <line x1="15" y1="45" x2="330" y2="45" stroke="#cbd5e1" strokeWidth="2" />
          {INTERVALS.map((label, i) => {
            const x = 20 + i * 62;
            return (
              <g key={label}>
                <circle cx={x} cy={45} r="7" fill={i === 0 ? "#94a3b8" : "#10b981"} />
                <text x={x} y={65} textAnchor="middle" fontSize="8.5" fill="#334155" className="dark:fill-slate-300">
                  {label}
                </text>
                <text x={x} y={30} textAnchor="middle" fontSize="9">💪</text>
              </g>
            );
          })}
        </svg>
      </DiagramCard>

      <MetaphorBox>
        復習は<strong>筋トレ</strong>と同じ。毎日ぶっ通しで同じ筋肉を鍛えるより、
        適度に休みを挟んで繰り返すほうが強くなります。記憶も「間隔をあけて思い出す」ことで、
        ザルの目が少しずつ細かくなっていきます。
      </MetaphorBox>

      <div className="space-y-2">
        <p className="text-xs font-bold tracking-wide text-slate-400">もう少しくわしく</p>
        <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          <li>
            覚えた当日→<strong>1日後→3日後→1週間後→2週間後→1ヶ月後</strong>、と間隔を広げながら思い出す。
            これが最も定着効率が良いとされる復習パターンです。
          </li>
          <li>
            ポイントは「見て確認する」のではなく、<strong>まず自力で思い出そうとする</strong>こと
            （これがザルの目を細かくする本体の作業）。
          </li>
          <li>
            スマホのフラッシュカードアプリや紙の単語帳でも、この間隔を意識するだけで定着率は大きく変わります。
          </li>
        </ul>
      </div>

      <TryIt label="やってみよう：想起の練習（フラッシュカード）">
        <FlashcardDeck
          cards={[
            { front: "忘却曲線とは？", back: "時間とともに記憶が急激に失われていく現象（ザルで水をすくうイメージ）" },
            { front: "定着に一番効くのは？", back: "読み返すことより「自力で思い出す（想起）」練習" },
            { front: "復習の黄金パターンは？", back: "1日後→3日後→1週間後→2週間後→1ヶ月後、と間隔をあけて繰り返す" },
          ]}
        />
      </TryIt>
    </PageShell>
  );
}
