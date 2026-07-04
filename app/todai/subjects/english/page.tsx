import Link from "next/link";
import { PageShell } from "@/components/todai/PageShell";
import { DiagramCard } from "@/components/todai/DiagramCard";
import { MetaphorBox } from "@/components/todai/MetaphorBox";
import { TryIt } from "@/components/todai/TryIt";
import { Quiz } from "@/components/todai/Quiz";
import { SkillTree } from "@/components/todai/SkillTree";

export const metadata = { title: "英語 | 東大攻略クエスト" };

export default function Page() {
  return (
    <PageShell sectionSlug="subjects" pageSlug="english">
      <DiagramCard caption="英語ダンジョンの攻略ステージ">
        <SkillTree
          stages={[
            { stage: "基礎装備", skills: ["単語・熟語", "基本文法"] },
            { stage: "精読", skills: ["構文を型として認識", "長文の骨組み読解"] },
            { stage: "速読・要約", skills: ["パラグラフ単位の要旨把握", "情報の取捨選択"] },
            { stage: "英作文", skills: ["自由英作文の型", "和文英訳の言い換え力"] },
          ]}
        />
      </DiagramCard>

      <MetaphorBox>
        英語は<strong>ゲーム序盤で手に入れる基本装備</strong>。配点が大きく、
        他のダンジョン（科目）にも波及する土台なので、最初にここへ投資すると全体の攻略効率が上がります。
      </MetaphorBox>

      <div className="space-y-2">
        <p className="text-xs font-bold tracking-wide text-slate-400">つまづきやすい部屋：英作文</p>
        <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          英作文は<strong>「レゴブロックを組み立てる」</strong>ようなものです。難しい単語や複雑な構文（特殊なパーツ）を
          探しに行くのではなく、<strong>自分が確実に組み立てられる単純なブロック（簡単な文型）を正確に並べる</strong>
          ほうが、得点は安定します。
        </p>
      </div>

      <div className="space-y-2">
        <p className="text-xs font-bold tracking-wide text-slate-400">教材の使い方（地図であって内容講義ではありません）</p>
        <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          <li>
            <strong>単語帳は1冊を完璧に</strong>。何冊も浮気せず、02章「復習の黄金ルール」の間隔で回します。
          </li>
          <li>
            文法書は辞書的に使い、長文の中で出てきた文法事項をその都度確認するスタイルが効率的です。
          </li>
          <li>
            過去問は「設計図」として早めに一度目を通し（02章「過去問の正しい使い方」）、
            英作文・要約の出題形式に慣れておきましょう。
          </li>
        </ul>
      </div>

      <p className="text-sm text-slate-500 dark:text-slate-400">
        関連する地頭スキル：
        <Link href="/todai/thinking/abstraction" className="ml-1 font-semibold text-indigo-600 hover:underline dark:text-indigo-400">
          抽象化（要約）
        </Link>
        ・
        <Link href="/todai/thinking/pattern" className="font-semibold text-indigo-600 hover:underline dark:text-indigo-400">
          パターン認識（構文・型）
        </Link>
      </p>

      <TryIt label="やってみよう：英作文の型チェック">
        <Quiz
          questions={[
            {
              question: "自由英作文で得点を安定させるコツは？",
              choices: [
                "知っている中で一番難しい単語・構文を使う",
                "自分が確実に使える単純な文型を正確に積み重ねる",
                "とにかく長く書く",
              ],
              correctIndex: 1,
              explanation:
                "無理に難しい表現を狙うとミスが増えます。確実なブロックを積み重ねる方が安定して得点できます。",
            },
          ]}
        />
      </TryIt>
    </PageShell>
  );
}
