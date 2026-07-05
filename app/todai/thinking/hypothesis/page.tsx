import { PageShell } from "@/components/todai/PageShell";
import { DiagramCard } from "@/components/todai/DiagramCard";
import { MetaphorBox } from "@/components/todai/MetaphorBox";
import { TryIt } from "@/components/todai/TryIt";
import { Quiz } from "@/components/todai/Quiz";

export const metadata = { title: "仮説思考 | 東大攻略クエスト" };

export default function Page() {
  return (
    <PageShell sectionSlug="thinking" pageSlug="hypothesis">
      <DiagramCard caption="目的地を先に決めてから歩く vs あてもなく歩き回る">
        <svg viewBox="0 0 300 100" className="h-auto w-full max-w-md">
          <text x="30" y="55" fontSize="20">🚶</text>
          <path d="M45 55 C 70 20, 100 80, 130 55 S 170 20, 200 55" stroke="#fca5a5" strokeWidth="2" fill="none" strokeDasharray="3 3" />
          <text x="90" y="90" fontSize="8" textAnchor="middle" fill="#334155" className="dark:fill-slate-300">迷走ルート</text>

          <text x="30" y="20" fontSize="8" fill="#334155" className="dark:fill-slate-300">仮説なし</text>

          <text x="235" y="55" fontSize="18">🚩</text>
          <line x1="45" y1="55" x2="230" y2="55" stroke="#6ee7b7" strokeWidth="2" />
        </svg>
      </DiagramCard>

      <MetaphorBox>
        仮説思考は<strong>先に目的地（ゴール）を決めてから歩く</strong>こと。
        目的地を決めずに歩き回ると遠回りになりますが、
        「たぶんこっちだろう」という当たりをつけてから動けば、最短距離で進めます。
      </MetaphorBox>

      <div className="space-y-2">
        <p className="text-xs font-bold tracking-wide text-slate-400">もう少しくわしく</p>
        <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          <li>
            数学の記述問題では、<strong>手を動かす前に「たぶんこの方針で解けそうだ」という仮説（方針）</strong>
            を先に立てるのが重要です。
          </li>
          <li>
            方針を立てずにいきなり計算を始めると、遠回りの計算に時間を溶かしてしまいます。
          </li>
          <li>
            鍛え方：問題を見たら、解き始める前に一言で「方針メモ」を書く練習をする
            （例：「対称性を使って範囲を絞れそう」）。
          </li>
          <li>
            仮説が外れても構いません。<strong>外れた仮説を修正する経験自体が地力になります。</strong>
          </li>
        </ul>
      </div>

      <TryIt label="やってみよう：方針を先に立てるドリル">
        <Quiz
          questions={[
            {
              question: "記述式の数学の問題を解くとき、最初にすべきことは？",
              choices: [
                "とにかく手を動かして計算を始める",
                "解答の方針（仮説）を一言で立ててから動く",
                "似た問題の答えを丸暗記して当てはめる",
              ],
              correctIndex: 1,
              explanation:
                "先に方針という仮説を立てることで、計算の無駄な遠回りを減らせます。",
            },
          ]}
        />
      </TryIt>
    </PageShell>
  );
}
