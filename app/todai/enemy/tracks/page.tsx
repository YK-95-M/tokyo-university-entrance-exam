import { PageShell } from "@/components/todai/PageShell";
import { DiagramCard } from "@/components/todai/DiagramCard";
import { MetaphorBox } from "@/components/todai/MetaphorBox";
import { TryIt } from "@/components/todai/TryIt";

export const metadata = { title: "科類の選び方 | 東大攻略クエスト" };

const TRACKS = [
  { id: "文科一類", note: "法学系中心の入口" },
  { id: "文科二類", note: "経済学系中心の入口" },
  { id: "文科三類", note: "文学・語学・教育など" },
  { id: "理科一類", note: "数学・物理系中心の入口" },
  { id: "理科二類", note: "生命科学・化学系中心" },
  { id: "理科三類", note: "医学部進学ルート・面接あり" },
];

export default function Page() {
  return (
    <PageShell sectionSlug="enemy" pageSlug="tracks">
      <DiagramCard caption="6つの科類＝6つの入口（ダンジョンの入口はどこも東大の中でつながっている）">
        <div className="grid grid-cols-3 gap-3">
          {TRACKS.map((t) => (
            <div
              key={t.id}
              className="flex flex-col items-center rounded-xl border-2 border-slate-300 bg-white p-2 text-center dark:border-slate-600 dark:bg-slate-800"
            >
              <span className="text-xl" aria-hidden>🚪</span>
              <span className="mt-1 text-[11px] font-bold text-slate-800 dark:text-slate-100">
                {t.id}
              </span>
            </div>
          ))}
        </div>
      </DiagramCard>

      <MetaphorBox>
        科類は「進むダンジョンの入口」のようなもの。実は東大は
        <strong>入学後に進む学部を決める（進学選択・いわゆる進振り）</strong>
        仕組みがあり、科類はあくまで最初の入口です。入口選びで人生が完全に固定されるわけではありません。
      </MetaphorBox>

      <div className="space-y-2">
        <p className="text-xs font-bold tracking-wide text-slate-400">もう少しくわしく</p>
        <ul className="space-y-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          {TRACKS.map((t) => (
            <li key={t.id} className="flex gap-2">
              <span className="font-bold text-slate-900 dark:text-slate-100">{t.id}</span>
              <span>{t.note}</span>
            </li>
          ))}
        </ul>
        <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          理科三類のみ、二次試験に加えて<strong>面接</strong>があります。
          どの科類も二次科目の教科の枠組み自体は共通（文科系／理科系で科目セットが分かれる）です。
          自分が学びたい方向・将来像から、まず文科系か理科系かの大枠を選ぶのが現実的な一歩です。
        </p>
      </div>

      <TryIt label="やってみよう：自分の入口を仮決めする">
        <p className="text-sm text-slate-600 dark:text-slate-300">
          今の時点で「文科系・理科系」どちらに興味があるか、紙に一言でメモしてみましょう。
          迷っていてもOK。次の「必要科目マップ」で、必要な科目セットを見てから決めても遅くありません。
        </p>
      </TryIt>
    </PageShell>
  );
}
