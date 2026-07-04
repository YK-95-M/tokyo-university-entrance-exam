import { PageShell } from "@/components/todai/PageShell";
import { DiagramCard } from "@/components/todai/DiagramCard";
import { MetaphorBox } from "@/components/todai/MetaphorBox";
import { TryIt } from "@/components/todai/TryIt";

export const metadata = { title: "週の回し方 | 東大攻略クエスト" };

const WEEK = [
  { day: "平日(月〜金)", plan: "通勤・昼休みで暗記系20〜30分 + 夜30〜60分で数学演習" },
  { day: "土曜", plan: "まとまった2〜3時間で過去問・記述演習" },
  { day: "日曜", plan: "1週間の振り返り（メタ認知）+ 苦手分野の補強 + 軽めの暗記" },
];

export default function Page() {
  return (
    <PageShell sectionSlug="roadmap" pageSlug="weekly">
      <DiagramCard caption="社会人が現実的に回せる週間テンプレ（例）">
        <div className="w-full max-w-lg space-y-2">
          {WEEK.map((w) => (
            <div
              key={w.day}
              className="flex flex-col gap-1 rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-900 sm:flex-row sm:items-center sm:gap-4"
            >
              <span className="w-28 shrink-0 text-xs font-bold text-slate-500 dark:text-slate-400">
                {w.day}
              </span>
              <span className="text-sm text-slate-700 dark:text-slate-200">{w.plan}</span>
            </div>
          ))}
        </div>
      </DiagramCard>

      <MetaphorBox>
        週の回し方は<strong>RPGの「平日は雑魚狩り、週末はボス部屋」</strong>のイメージ。
        平日はスキマ時間での暗記・小さな演習でコツコツ経験値を稼ぎ、
        週末にまとまった時間で記述・過去問という大物に挑みます。
      </MetaphorBox>

      <div className="space-y-2">
        <p className="text-xs font-bold tracking-wide text-slate-400">もう少しくわしく</p>
        <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          <li>
            平日に「まとまった時間」を狙うと仕事の繁忙期に崩れやすいので、
            <strong>平日はスキマ時間、週末に厚み</strong>を持たせる設計が現実的です。
          </li>
          <li>
            日曜の振り返り（メタ認知）を必ず組み込むことで、来週の優先順位が自動的に決まります。
          </li>
          <li>
            繁忙期でも<strong>「これだけは崩さない最低ライン」</strong>（例：単語の想起5分だけ）を決めておくと、
            ゼロの日を作らずに済みます（06章「継続の技術」参照）。
          </li>
        </ul>
      </div>

      <TryIt label="やってみよう：自分の週間テンプレを作る">
        <p className="text-sm text-slate-600 dark:text-slate-300">
          上の例を土台に、自分の勤務時間・生活リズムに合わせて「平日・土曜・日曜」に何をするか、
          紙またはカレンダーアプリに書き出してみましょう。完璧を狙わず、最初はざっくりでOKです。
        </p>
      </TryIt>
    </PageShell>
  );
}
