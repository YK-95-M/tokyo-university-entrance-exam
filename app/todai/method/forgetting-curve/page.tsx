import { PageShell } from "@/components/todai/PageShell";
import { DiagramCard } from "@/components/todai/DiagramCard";
import { MetaphorBox } from "@/components/todai/MetaphorBox";
import { TryIt } from "@/components/todai/TryIt";
import { Quiz } from "@/components/todai/Quiz";

export const metadata = { title: "記憶のしくみ | 東大攻略クエスト" };

export default function Page() {
  return (
    <PageShell sectionSlug="method" pageSlug="forgetting-curve">
      <DiagramCard caption="ザルで水をすくうと、置いておくだけで漏れていく">
        <svg viewBox="0 0 320 130" className="h-auto w-full max-w-lg">
          <text x="140" y="63" fontSize="30">🥣</text>
          {[
            { cx: 130, cy: 55 },
            { cx: 148, cy: 50 },
            { cx: 160, cy: 60 },
          ].map((d, i) => (
            <circle key={i} cx={d.cx} cy={d.cy + 25} r="1.5" fill="#38bdf8" opacity={0.7} />
          ))}
          <path
            d="M20 20 C 60 25, 90 60, 110 75 S 200 100, 300 108"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="3"
          />
          <text x="20" y="14" fontSize="9" fill="#334155" className="dark:fill-slate-300">
            記憶量
          </text>
          <text x="270" y="120" fontSize="9" fill="#334155" className="dark:fill-slate-300">
            時間経過
          </text>
        </svg>
      </DiagramCard>

      <MetaphorBox>
        覚えたことを忘れるのは<strong>ザルで水をすくった</strong>ときと同じで、当たり前の現象です。
        「一度入れたら漏れない容器」を目指すのではなく、
        <strong>「何度もすくい直す」</strong>前提で設計するのが正解です。
      </MetaphorBox>

      <div className="space-y-2">
        <p className="text-xs font-bold tracking-wide text-slate-400">ひとことで言うと</p>
        <p className="text-base font-semibold text-slate-800 dark:text-slate-100">
          忘れるのは失敗じゃない。人間の脳の仕様。だから「思い出す練習」を繰り返す設計にする。
        </p>
      </div>

      <div className="space-y-2">
        <p className="text-xs font-bold tracking-wide text-slate-400">もう少しくわしく</p>
        <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          <li>
            人の記憶は、時間が経つほど急激に、その後はゆるやかに失われていきます（上の右下がりの曲線）。
          </li>
          <li>
            この漏れを止める一番の対策は「読み返す」ことではなく、
            <strong>「自力で思い出す（想起する）」</strong>こと。この差は次ページ「復習の黄金ルール」で扱います。
          </li>
          <li>
            「一夜漬けで頭に入れて満足」は、ザルに水を注ぎ続けているだけで、次の日にはほぼ空になっています。
          </li>
        </ul>
      </div>

      <TryIt label="やってみよう：忘却チェック">
        <Quiz
          questions={[
            {
              question: "昨日覚えた英単語を今日ほとんど忘れていた。これは？",
              choices: [
                "自分の記憶力が悪い証拠",
                "誰にでも起きる普通の現象",
                "もう覚える才能がない",
              ],
              correctIndex: 1,
              explanation:
                "忘却は脳の正常な仕様です。落ち込む必要はなく、「何度もすくい直す」仕組み（次ページ）で対応します。",
            },
          ]}
        />
      </TryIt>
    </PageShell>
  );
}
