import Link from "next/link";
import { PageShell } from "@/components/todai/PageShell";
import { DiagramCard } from "@/components/todai/DiagramCard";
import { MetaphorBox } from "@/components/todai/MetaphorBox";
import { TryIt } from "@/components/todai/TryIt";
import { Quiz } from "@/components/todai/Quiz";
import { SkillTree } from "@/components/todai/SkillTree";

export const metadata = { title: "国語 | 東大攻略クエスト" };

export default function Page() {
  return (
    <PageShell sectionSlug="subjects" pageSlug="japanese">
      <DiagramCard caption="国語ダンジョンは3つの武器の使い分け">
        <SkillTree
          stages={[
            { stage: "現代文", skills: ["本文根拠の抜き出し", "要約・言い換え"] },
            { stage: "古文", skills: ["古文単語・文法", "係り受けの把握"] },
            { stage: "漢文", skills: ["句形（型）の暗記", "返り点のルール"] },
          ]}
        />
      </DiagramCard>

      <MetaphorBox>
        国語は<strong>3つの武器を使い分ける総合ダンジョン</strong>。現代文・古文・漢文は別の言語のようなもので、
        それぞれ専用の対策が必要です。「なんとなく読めばわかる」は東大の記述では通用しません。
      </MetaphorBox>

      <div className="space-y-2">
        <p className="text-xs font-bold tracking-wide text-slate-400">つまづきやすい部屋：古文単語</p>
        <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          古文単語は<strong>「見た目は日本語だけど、実は意味が違う外国語（偽の友＝フォールスフレンド）」</strong>
          のようなもの。「あはれ」「をかし」など、現代語の直感で読むと誤読します。
          単語は現代語と切り離して、専用の意味として覚え直しましょう。
        </p>
      </div>

      <div className="space-y-2">
        <p className="text-xs font-bold tracking-wide text-slate-400">教材の使い方</p>
        <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          <li>
            現代文は「なんとなく読解」を避け、必ず<strong>本文中の根拠</strong>を指差せる読み方を訓練します。
            <Link href="/todai/thinking/abstraction" className="mx-1 font-semibold text-indigo-600 hover:underline dark:text-indigo-400">
              抽象化（要約）
            </Link>
            の力が直結します。
          </li>
          <li>
            古文・漢文は単語・文法・句形という「暗記部分」を先に固め、その後に長文演習で
            <Link href="/todai/thinking/pattern" className="mx-1 font-semibold text-indigo-600 hover:underline dark:text-indigo-400">
              パターン認識
            </Link>
            を鍛えます。
          </li>
          <li>
            記述式の解答は「本文の言葉をそのまま使う」より「自分の言葉で言い換える」ほうが評価されやすい傾向があります。
          </li>
        </ul>
      </div>

      <TryIt label="やってみよう：現代語との違いクイズ">
        <Quiz
          questions={[
            {
              question: "古文単語を学ぶときに最も注意すべきことは？",
              choices: [
                "現代語の感覚のまま意味を推測する",
                "現代語と切り離し、専用の意味として覚え直す",
                "漢字の見た目だけで判断する",
              ],
              correctIndex: 1,
              explanation:
                "古文単語は現代語と意味がずれていることが多く、「偽の友」として専用に覚え直す必要があります。",
            },
          ]}
        />
      </TryIt>
    </PageShell>
  );
}
