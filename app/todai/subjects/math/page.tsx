import Link from "next/link";
import { PageShell } from "@/components/todai/PageShell";
import { DiagramCard } from "@/components/todai/DiagramCard";
import { MetaphorBox } from "@/components/todai/MetaphorBox";
import { TryIt } from "@/components/todai/TryIt";
import { Quiz } from "@/components/todai/Quiz";
import { SkillTree } from "@/components/todai/SkillTree";

export const metadata = { title: "数学 | 東大攻略クエスト" };

export default function Page() {
  return (
    <PageShell sectionSlug="subjects" pageSlug="math">
      <DiagramCard caption="数学ダンジョンの攻略ステージ（積み上げ型）">
        <SkillTree
          stages={[
            { stage: "中学〜数I・A基礎", skills: ["計算力", "図形・場合の数の基本"] },
            { stage: "数II・B・C", skills: ["関数・微積の土台", "ベクトル・数列"] },
            { stage: "数III", skills: ["極限・微積分の応用"] },
            { stage: "過去問演習", skills: ["頻出パターンのストック", "記述の型"] },
          ]}
        />
      </DiagramCard>

      <MetaphorBox>
        数学は典型的な<strong>「積み上げゲー」</strong>。ドラクエで言えば、
        レベル上げを飛ばして先のダンジョンに行くと、次の敵に手も足も出ません。
        前の単元の理解が次の単元の土台になるので、抜けたまま進まないことが最重要です。
      </MetaphorBox>

      <div className="space-y-2">
        <p className="text-xs font-bold tracking-wide text-slate-400">
          つまづきやすい部屋：二次関数の平方完成
        </p>
        <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          平方完成は<strong>「歪んだ箱の形を、きれいな正方形に整え直す」</strong>作業だとイメージしてください。
          x²+bx+c という歪んだ箱を (x+◯)²+△ という整った箱に組み替えることで、
          頂点（箱の中心）の位置が一目で分かるようになります。
        </p>
      </div>

      <div className="space-y-2">
        <p className="text-xs font-bold tracking-wide text-slate-400">教材の使い方</p>
        <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          <li>
            まず基礎問題集で「解法の型」を1周し、次に標準〜応用レベルで
            <Link href="/todai/thinking/pattern" className="font-semibold text-indigo-600 hover:underline dark:text-indigo-400">
              パターン認識
            </Link>
            を鍛えます。
          </li>
          <li>
            難問は必ず
            <Link href="/todai/thinking/decomposition" className="mx-1 font-semibold text-indigo-600 hover:underline dark:text-indigo-400">
              分解
            </Link>
            してから着手し、解けなかった問題は03章「メタ認知」のテンプレで振り返りましょう。
          </li>
          <li>
            過去問は記述の書き方（論理の飛躍がないか）を意識して取り組むと、二次特有の採点基準に慣れられます。
          </li>
        </ul>
      </div>

      <TryIt label="やってみよう：積み上げ確認クイズ">
        <Quiz
          questions={[
            {
              question: "数学の学習で最もやってはいけない進め方は？",
              choices: [
                "前の単元の理解があいまいなまま次に進む",
                "分からない問題を小問に分解して考える",
                "解けなかった問題を後で振り返る",
              ],
              correctIndex: 0,
              explanation:
                "数学は積み上げ型。前の単元が土台になるため、あいまいなまま進むと後で必ずつまづきます。",
            },
          ]}
        />
      </TryIt>
    </PageShell>
  );
}
