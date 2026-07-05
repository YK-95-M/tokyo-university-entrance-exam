import { PageShell } from "@/components/todai/PageShell";
import { DiagramCard } from "@/components/todai/DiagramCard";
import { MetaphorBox } from "@/components/todai/MetaphorBox";
import { TryIt } from "@/components/todai/TryIt";
import { Quiz } from "@/components/todai/Quiz";

export const metadata = { title: "地頭は生まれつき？ | 東大攻略クエスト" };

export default function Page() {
  return (
    <PageShell sectionSlug="thinking" pageSlug="growth">
      <DiagramCard caption="地頭は「才能の器」ではなく「鍛えられる筋肉」">
        <svg viewBox="0 0 300 100" className="h-auto w-full max-w-md">
          <text x="70" y="45" fontSize="34" textAnchor="middle">🔒</text>
          <text x="70" y="75" fontSize="9" textAnchor="middle" fill="#334155" className="dark:fill-slate-300">
            固定と思われがちな見方
          </text>
          <text x="230" y="45" fontSize="34" textAnchor="middle">💪</text>
          <text x="230" y="75" fontSize="9" textAnchor="middle" fill="#334155" className="dark:fill-slate-300">
            正しい見方（鍛えられる）
          </text>
          <text x="150" y="45" fontSize="18" textAnchor="middle" fill="#94a3b8">→</text>
        </svg>
      </DiagramCard>

      <MetaphorBox>
        「地頭が良い／悪い」は生まれつきで決まると思われがちですが、実態はほぼ
        <strong>「考え方のクセ＝筋トレで伸びるスキルの集まり」</strong>です。
        誰でも天才になれる、とは言いません。ただし正しい訓練で確実に伸びる範囲はかなり大きいのです。
      </MetaphorBox>

      <div className="space-y-2">
        <p className="text-xs font-bold tracking-wide text-slate-400">
          なぜ東大受験で地頭が効くのか（最強の動機づけ）
        </p>
        <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          <li>
            東大の入試方針は、知識を詰め込むことより
            <strong>「持っている知識を関連づけて解を導く力」</strong>を重視すると明言しています。
          </li>
          <li>
            二次試験は<strong>全問記述式</strong>。暗記した公式をそのまま当てはめるだけでは解けず、
            その場で考える地力が問われます。
          </li>
          <li>
            つまり<strong>地頭トレーニング＝東大対策そのもの</strong>。遠回りに見えて、実は最短ルートです。
          </li>
        </ul>
      </div>

      <div className="space-y-2">
        <p className="text-xs font-bold tracking-wide text-slate-400">
          最重要原則：地頭は「別のパズル集」より「日々の勉強の深め方」で伸びる
        </p>
        <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          脳トレやパズルを単体でやるより、<strong>普段の勉強を深く処理する</strong>ほうが地力は伸びます。
          そのために、これから全科目の勉強で使う3つの口ぐせを紹介します。
        </p>
        <div className="grid gap-2 sm:grid-cols-3">
          {[
            { q: "要するに？", d: "抽象化：長い説明を一言でまとめる" },
            { q: "たとえば？／なぜ？", d: "具体化・因果：根拠や具体例を引き出す" },
            { q: "これ、他でも使える？", d: "転用：学んだ型を別の問題に応用する" },
          ].map((c) => (
            <div
              key={c.q}
              className="rounded-xl border border-indigo-200 bg-indigo-50 p-3 text-center dark:border-indigo-900 dark:bg-indigo-950/30"
            >
              <p className="font-bold text-indigo-700 dark:text-indigo-300">「{c.q}」</p>
              <p className="mt-1 text-xs text-indigo-800 dark:text-indigo-200">{c.d}</p>
            </div>
          ))}
        </div>
        <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          この3つを02章「勉強のやり方」と一体で回すこと——「理解して・関連づけて・振り返る」勉強こそが、
          地頭を育てます。次のページから、6つの具体的な地頭スキルを1つずつ鍛えていきます。
        </p>
      </div>

      <TryIt label="やってみよう：思い込みチェック">
        <Quiz
          questions={[
            {
              question: "地頭についてのこのサイトの立場は？",
              choices: [
                "生まれつきで完全に固定されている",
                "誰でも訓練だけで天才になれる",
                "考え方のクセであり、訓練で伸びる範囲が大きい",
              ],
              correctIndex: 2,
              explanation:
                "誇張はしません。ただし「正しい訓練で確実に伸びる範囲は大きい」というのが本サイトの立場です。",
            },
          ]}
        />
      </TryIt>
    </PageShell>
  );
}
