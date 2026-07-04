import { PageShell } from "@/components/todai/PageShell";
import { DiagramCard } from "@/components/todai/DiagramCard";
import { MetaphorBox } from "@/components/todai/MetaphorBox";
import { TryIt } from "@/components/todai/TryIt";
import { Quiz } from "@/components/todai/Quiz";

export const metadata = { title: "配点のカラクリ | 東大攻略クエスト" };

export default function Page() {
  return (
    <PageShell sectionSlug="enemy" pageSlug="scoring">
      <DiagramCard caption="合格点の内訳イメージ（共テは110点満点に圧縮換算、二次が440点満点＝比重の大部分）">
        <svg viewBox="0 0 320 110" className="h-auto w-full max-w-lg">
          <text x="10" y="20" fontSize="10" fill="#334155" className="dark:fill-slate-300">
            自分の持ち点（例）
          </text>
          <rect x="10" y="28" width="60" height="28" fill="#fbbf24" rx="4" />
          <text x="40" y="46" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#78350f">
            共テ 約2割
          </text>
          <rect x="72" y="28" width="238" height="28" fill="#10b981" rx="4" />
          <text x="191" y="46" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">
            二次試験 約8割 ＝ ここが本丸
          </text>
          <text x="10" y="78" fontSize="9.5" fill="#334155" className="dark:fill-slate-300">
            → だから勉強時間という「投資」も、
          </text>
          <text x="10" y="93" fontSize="9.5" fill="#334155" className="dark:fill-slate-300">
            二次の記述力にまず厚く配分する
          </text>
        </svg>
      </DiagramCard>

      <MetaphorBox>
        配点は<strong>お金の配分</strong>と同じ。手持ちの資金（勉強時間）をどこに投資するかで結果が変わります。
        東大は二次試験の配点が圧倒的に大きいので、「二次の記述力」に厚く投資するのが正解です。
      </MetaphorBox>

      <div className="space-y-2">
        <p className="text-xs font-bold tracking-wide text-slate-400">もう少しくわしく</p>
        <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          <li>
            共通テストの得点は、二次試験に比べて<strong>小さい配点に圧縮換算</strong>されます。
          </li>
          <li>
            合否は「共テ（圧縮後）＋ 二次（配点の大部分）」の合計で決まるため、
            <strong>二次の記述対策が合否を分ける本丸</strong>です。
          </li>
          <li>
            二次は<strong>全問記述式</strong>。答案量も多く、「書いて伝える力」が問われます。
            暗記だけでは太刀打ちできません。
          </li>
          <li>
            とはいえ共テを甘く見ると足切りで二次に進めないので、「共テは通過ラインまで、二次は最大投資」が基本方針です。
          </li>
        </ul>
      </div>

      <TryIt label="やってみよう：投資判断クイズ">
        <Quiz
          questions={[
            {
              question: "勉強時間という「資金」を最も厚く投資すべきはどこ？",
              choices: ["共通テストの選択肢対策", "二次試験の記述対策", "どちらも均等でよい"],
              correctIndex: 1,
              explanation:
                "配点の大部分を占める二次試験の記述力に投資するのが最も効率的です。ただし共テは足切り通過分の対策は必須。",
            },
          ]}
        />
      </TryIt>
    </PageShell>
  );
}
