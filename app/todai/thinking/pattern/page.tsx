import { PageShell } from "@/components/todai/PageShell";
import { DiagramCard } from "@/components/todai/DiagramCard";
import { MetaphorBox } from "@/components/todai/MetaphorBox";
import { TryIt } from "@/components/todai/TryIt";
import { Quiz } from "@/components/todai/Quiz";

export const metadata = { title: "パターン認識・転用 | 東大攻略クエスト" };

export default function Page() {
  return (
    <PageShell sectionSlug="thinking" pageSlug="pattern">
      <DiagramCard caption="料理の「基本の型」を覚えれば、具材が変わっても応用できる">
        <svg viewBox="0 0 300 100" className="h-auto w-full max-w-md">
          <rect x="120" y="15" width="60" height="34" rx="8" fill="#fde68a" />
          <text x="150" y="36" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#78350f">基本の型</text>
          {["🍜", "🍛", "🍲"].map((emo, i) => (
            <g key={i}>
              <line x1="150" y1="49" x2={60 + i * 90} y2="75" stroke="#cbd5e1" strokeWidth="1.5" />
              <text x={60 + i * 90} y="88" fontSize="20" textAnchor="middle">{emo}</text>
            </g>
          ))}
        </svg>
      </DiagramCard>

      <MetaphorBox>
        「炒めて→煮込んで→味付け」という<strong>基本の型</strong>さえ覚えれば、
        具材を変えるだけでラーメンにもカレーにもなります。
        数学も同じで、「この問題は前に解いたあの型だ」と見抜ければ、初見の問題でも手が動きます。
      </MetaphorBox>

      <div className="space-y-2">
        <p className="text-xs font-bold tracking-wide text-slate-400">もう少しくわしく</p>
        <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          <li>
            東大数学で<strong>最も決定的</strong>なスキル。難問の多くは、実は既知のいくつかの「型」の組み合わせです。
          </li>
          <li>
            鍛え方：新しい問題を解いたら「この問題は、前に解いたどの問題と同じ型か？」を必ず自問する。
          </li>
          <li>
            単に答えを覚えるのではなく、<strong>「何が同じで、何が違うか」</strong>を言語化するのがポイントです。
          </li>
          <li>
            過去問演習の際、解けた問題も「なぜこの解法を選んだか」を振り返ると型のストックが増えていきます。
          </li>
        </ul>
      </div>

      <TryIt label="やってみよう：型の分類ドリル">
        <Quiz
          questions={[
            {
              question:
                "「2つの式を足したり引いたりして未知数を消去する」という解き方は、次のどの問題にも転用できる型か？",
              choices: [
                "連立方程式だけに使える特殊な型",
                "図形の証明問題を含む、幅広い問題に転用できる汎用的な型",
                "一度使ったら二度と使えない特殊な型",
              ],
              correctIndex: 1,
              explanation:
                "「式変形で情報を整理する」型は、連立方程式に限らず図形・確率など幅広い分野に転用できます。",
            },
          ]}
        />
      </TryIt>
    </PageShell>
  );
}
