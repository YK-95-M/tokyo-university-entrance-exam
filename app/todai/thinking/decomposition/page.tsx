import { PageShell } from "@/components/todai/PageShell";
import { DiagramCard } from "@/components/todai/DiagramCard";
import { MetaphorBox } from "@/components/todai/MetaphorBox";
import { TryIt } from "@/components/todai/TryIt";
import { Quiz } from "@/components/todai/Quiz";

export const metadata = { title: "問題を分解する | 東大攻略クエスト" };

export default function Page() {
  return (
    <PageShell sectionSlug="thinking" pageSlug="decomposition">
      <DiagramCard caption="大きな荷物は、そのままでは運べない。小分けにすれば運べる">
        <svg viewBox="0 0 300 100" className="h-auto w-full max-w-md">
          <rect x="20" y="20" width="70" height="60" rx="6" fill="#fca5a5" />
          <text x="55" y="55" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#7f1d1d">大問</text>
          <text x="120" y="55" fontSize="18" fill="#94a3b8">→</text>
          {[0, 1, 2].map((i) => (
            <rect key={i} x={155 + i * 48} y={20 + (i % 2) * 10} width="40" height="40" rx="6" fill="#6ee7b7" />
          ))}
          <text x="175" y="45" textAnchor="middle" fontSize="8" fill="#065f46">小問</text>
          <text x="223" y="55" textAnchor="middle" fontSize="8" fill="#065f46">小問</text>
          <text x="271" y="45" textAnchor="middle" fontSize="8" fill="#065f46">小問</text>
        </svg>
      </DiagramCard>

      <MetaphorBox>
        巨大な段ボール箱は一人で持ち上げられなくても、
        <strong>中身を小分けの袋に分ければ何往復かで運べます</strong>。
        東大の難しい大問も同じで、いきなり全体を解こうとせず「解ける小問」に切り分けるのがコツです。
      </MetaphorBox>

      <div className="space-y-2">
        <p className="text-xs font-bold tracking-wide text-slate-400">もう少しくわしく</p>
        <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          <li>
            難問を見て固まってしまう人の多くは、<strong>「全部を一気に解こうとしている」</strong>のが原因です。
          </li>
          <li>
            まず「何が分かれば答えに近づくか」を洗い出し、それぞれを独立した小さな問いに変換します。
          </li>
          <li>
            数学・理科の大問はもちろん、現代文の記述問題も
            「設問の要求」を2〜3個の小さな確認事項に分解すると書きやすくなります。
          </li>
          <li>
            鍛え方：解けなかった問題の解説を読むとき、「どこまでは自分で分解できていたか」を振り返るのが練習になります。
          </li>
        </ul>
      </div>

      <TryIt label="やってみよう：分解ドリル">
        <Quiz
          questions={[
            {
              question:
                "「ある関数の最大値を求めよ」という大問を分解するとき、最初に切り分けるべき小問は？",
              choices: [
                "いきなり最大値の候補を計算する",
                "定義域を確認し、グラフの形（増減）を把握する",
                "答えの選択肢から逆算する",
              ],
              correctIndex: 1,
              explanation:
                "最大値の候補を出す前に、定義域と関数の形（増減表など）を確認するのが分解の第一歩です。",
            },
          ]}
        />
      </TryIt>
    </PageShell>
  );
}
