import { PageShell } from "@/components/todai/PageShell";
import { DiagramCard } from "@/components/todai/DiagramCard";
import { MetaphorBox } from "@/components/todai/MetaphorBox";
import { TryIt } from "@/components/todai/TryIt";

export const metadata = { title: "理科 | 東大攻略クエスト" };

const SCIENCES = [
  { name: "物理", note: "少ない原理を式で使い回す。数学が得意な人と相性が良い" },
  { name: "化学", note: "暗記と計算のバランス型。理科二類以降でほぼ必須級" },
  { name: "生物", note: "覚える知識量が多いが、暗記が得意なら安定しやすい" },
  { name: "地学", note: "開講・対応大学が限られることがあるため事前確認が必須" },
];

export default function Page() {
  return (
    <PageShell sectionSlug="subjects" pageSlug="science">
      <DiagramCard caption="理科は2科目選択制。まず自分の相性を知る">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {SCIENCES.map((s) => (
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
        理科は<strong>装備の「属性」選び</strong>のようなもの。物理は少ない呪文（公式）を使い回す近接アタッカー、
        生物は知識量で押す物量型、というように得意なスタイルが人によって違います。
      </MetaphorBox>

      <div className="space-y-2">
        <p className="text-xs font-bold tracking-wide text-slate-400">つまづきやすい部屋：物理の力学</p>
        <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          物理の力学は<strong>「矢印（ベクトル）で綱引きの力関係を描く」</strong>とイメージすると理解しやすいです。
          物体にかかる力を1本ずつ矢印で書き出し、綱引きのように釣り合いを見ることで、
          式を丸暗記しなくても状況が図として見えるようになります。
        </p>
      </div>

      <div className="space-y-2">
        <p className="text-xs font-bold tracking-wide text-slate-400">教材の使い方</p>
        <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          <li>
            2科目のうち、進みたい科類・興味に加えて「暗記型か原理型か」の相性で選ぶのが現実的です。
          </li>
          <li>
            基礎知識（公式・現象名）を固めてから、過去問レベルの計算・記述に進む順序は数学と同じ積み上げ発想です。
          </li>
          <li>
            理科各類は2科目の組み合わせ次第で必要な学習量が変わるため、志望する科類の募集要項で
            必須・選択の扱いを必ず確認してください。
          </li>
        </ul>
      </div>

      <TryIt label="やってみよう：相性チェック">
        <p className="text-sm text-slate-600 dark:text-slate-300">
          「暗記は得意だが計算はやや苦手」「逆に計算は得意だが暗記量が多いと辛い」など、
          自分の傾向を一言でメモしてみましょう。それだけでも2科目の候補がかなり絞れます。
        </p>
      </TryIt>
    </PageShell>
  );
}
