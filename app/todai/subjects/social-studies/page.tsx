import Link from "next/link";
import { PageShell } from "@/components/todai/PageShell";
import { DiagramCard } from "@/components/todai/DiagramCard";
import { MetaphorBox } from "@/components/todai/MetaphorBox";
import { TryIt } from "@/components/todai/TryIt";

export const metadata = { title: "地歴 | 東大攻略クエスト" };

const SUBJECTS = [
  { name: "世界史", note: "範囲が広いが流れ（因果関係）を掴めば強い武器になる" },
  { name: "日本史", note: "身近な分だけ知識の密度が濃く、テーマ史の理解が要る" },
  { name: "地理", note: "暗記量は少なめだが、データ読解・論述の思考力が問われる" },
];

export default function Page() {
  return (
    <PageShell sectionSlug="subjects" pageSlug="social-studies">
      <DiagramCard caption="地歴は2科目選択制。記憶量よりも「因果の物語」で覚える">
        <div className="grid grid-cols-3 gap-3">
          {SUBJECTS.map((s) => (
            <div
              key={s.name}
              className="rounded-xl border border-slate-200 bg-white p-3 text-center dark:border-slate-800 dark:bg-slate-900"
            >
              <p className="font-bold text-slate-800 dark:text-slate-100">{s.name}</p>
              <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">{s.note}</p>
            </div>
          ))}
        </div>
      </DiagramCard>

      <MetaphorBox>
        地歴の暗記は<strong>バラバラの単語カードを覚える</strong>のではなく、
        <strong>「なぜそれが起きたか」という物語（ストーリー）として覚える</strong>のがコツです。
        物語は忘れにくく、東大の論述問題はまさにその「因果の物語」を書かせる形式です。
      </MetaphorBox>

      <div className="space-y-2">
        <p className="text-xs font-bold tracking-wide text-slate-400">つまづきやすい部屋：論述問題</p>
        <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          東大の地歴論述は、単なる知識の再生ではなく
          <strong>「複数の出来事を因果関係でつなげて説明する」</strong>ことを求められます。
          年号や用語の暗記だけでなく、
          <Link href="/todai/thinking/abstraction" className="mx-1 font-semibold text-indigo-600 hover:underline dark:text-indigo-400">
            抽象化
          </Link>
          して「要するにこの時代に何が起きたか」を説明できるかが問われます。
        </p>
      </div>

      <div className="space-y-2">
        <p className="text-xs font-bold tracking-wide text-slate-400">教材の使い方</p>
        <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          <li>
            まず教科書レベルで大きな流れ（因果関係）をつかみ、その後に用語・年号の暗記を重ねます。
            順番を逆にすると、丸暗記になり記述で使えません。
          </li>
          <li>
            2科目の組み合わせは、志望科類の募集要項で必須・選択の扱いを必ず確認してください。
          </li>
          <li>
            論述の過去問は、02章「過去問の正しい使い方」に沿って早めに出題形式を確認しておきましょう。
          </li>
        </ul>
      </div>

      <TryIt label="やってみよう：因果で覚える練習">
        <p className="text-sm text-slate-600 dark:text-slate-300">
          好きな歴史上の出来事を1つ選び、「なぜそれが起きたか」を1〜2文で説明してみましょう。
          年号や名前を思い出す前に、まず物語（因果）を言えるかを試すのがポイントです。
        </p>
      </TryIt>
    </PageShell>
  );
}
