import { PageShell } from "@/components/todai/PageShell";
import { DiagramCard } from "@/components/todai/DiagramCard";
import { MetaphorBox } from "@/components/todai/MetaphorBox";
import { TryIt } from "@/components/todai/TryIt";
import { Quiz } from "@/components/todai/Quiz";

export const metadata = { title: "過去問の正しい使い方 | 東大攻略クエスト" };

export default function Page() {
  return (
    <PageShell sectionSlug="method" pageSlug="past-papers">
      <DiagramCard caption="「腕試し」ではなく「設計図」として使う">
        <div className="grid w-full max-w-lg grid-cols-2 gap-4 text-center text-xs">
          <div className="rounded-xl border-2 border-rose-300 bg-rose-50 p-3 dark:border-rose-800 dark:bg-rose-950/30">
            <p className="mb-1 text-lg">🎯</p>
            <p className="font-bold text-rose-700 dark:text-rose-300">ありがちな発想</p>
            <p className="mt-1 text-rose-800 dark:text-rose-200">
              全部勉強し終えてから、最後に力試しとして解く
            </p>
          </div>
          <div className="rounded-xl border-2 border-emerald-300 bg-emerald-50 p-3 dark:border-emerald-800 dark:bg-emerald-950/30">
            <p className="mb-1 text-lg">🗺️</p>
            <p className="font-bold text-emerald-700 dark:text-emerald-300">正しい発想</p>
            <p className="mt-1 text-emerald-800 dark:text-emerald-200">
              最初にゴール（過去問）を見て、逆算して足りない所を埋める
            </p>
          </div>
        </div>
      </DiagramCard>

      <MetaphorBox>
        過去問は<strong>「ボスの行動パターン研究」</strong>そのもの。
        ボスに挑む前に一度戦い方を見ておけば、無駄な特訓を減らせます。
        腕試しは最後にとっておくものではなく、最初に見る「設計図」です。
      </MetaphorBox>

      <div className="space-y-2">
        <p className="text-xs font-bold tracking-wide text-slate-400">もう少しくわしく</p>
        <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          <li>
            早い段階（勉強を始めた直後でもOK）で一度、時間を気にせず過去問に目を通す。
            <strong>「今の自分にはまだ解けない」で構いません。</strong>
          </li>
          <li>
            見るのは「どんな形式・どんな深さの記述が求められるか」。これがゴールの解像度を上げてくれます。
          </li>
          <li>
            そのゴールと今の自分の差（01章「ゴールから逆算」参照）をもとに、日々の学習の優先順位を決めます。
          </li>
          <li>
            もちろん「本番形式で時間を計って解く」腕試しの使い方も、学習後半では重要です。
            <strong>最初は設計図、後半は腕試し</strong>——両方使い分けます。
          </li>
        </ul>
      </div>

      <TryIt label="やってみよう：発想の切り替えクイズ">
        <Quiz
          questions={[
            {
              question: "過去問を最初に見る目的は？",
              choices: [
                "今の実力を落ち込むために解く",
                "求められるゴールの形を知り、逆算するため",
                "得点だけ記録して終わりにするため",
              ],
              correctIndex: 1,
              explanation:
                "最初の過去問は「解けるかどうか」ではなく「ゴールの形を知る設計図」として使うのがポイントです。",
            },
          ]}
        />
      </TryIt>
    </PageShell>
  );
}
