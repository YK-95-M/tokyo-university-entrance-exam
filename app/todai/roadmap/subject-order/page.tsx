import { PageShell } from "@/components/todai/PageShell";
import { DiagramCard } from "@/components/todai/DiagramCard";
import { MetaphorBox } from "@/components/todai/MetaphorBox";
import { TryIt } from "@/components/todai/TryIt";
import { Quiz } from "@/components/todai/Quiz";

export const metadata = { title: "科目の攻略順 | 東大攻略クエスト" };

const ORDER = [
  { step: "1", subject: "英語", why: "配点が大きく、全科目の土台。伸びるまで時間もかかるので最速で着手" },
  { step: "2", subject: "数学", why: "積み上げ型で後回しにするほど詰む。基礎から並行して継続" },
  { step: "3", subject: "国語・理科／地歴", why: "英数の土台ができてから、記述の型と知識を積み上げる" },
  { step: "4", subject: "過去問演習", why: "土台ができた時点で早めに一度着手し、以降は定期的に回す" },
];

export default function Page() {
  return (
    <PageShell sectionSlug="roadmap" pageSlug="subject-order">
      <DiagramCard caption="攻略順の目安（配点効率×積み上げ型を考慮）">
        <div className="flex flex-wrap items-center gap-2">
          {ORDER.map((o, i) => (
            <div key={o.step} className="flex items-center gap-2">
              <div className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-center dark:border-slate-800 dark:bg-slate-900">
                <p className="text-[10px] text-slate-400">STEP {o.step}</p>
                <p className="text-sm font-bold text-slate-800 dark:text-slate-100">{o.subject}</p>
              </div>
              {i < ORDER.length - 1 && <span className="text-slate-300">→</span>}
            </div>
          ))}
        </div>
      </DiagramCard>

      <MetaphorBox>
        RPGでも、いきなり高レベルの武器（難しい科目）を装備しようとせず、
        まず<strong>誰でも育てられる土台（英語）</strong>から装備を整え、
        <strong>積み上げ型のダンジョン（数学）</strong>を並行して進めるのがセオリーです。
      </MetaphorBox>

      <div className="space-y-2">
        <p className="text-xs font-bold tracking-wide text-slate-400">もう少しくわしく</p>
        <ul className="space-y-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          {ORDER.map((o) => (
            <li key={o.step}>
              <span className="font-bold text-slate-900 dark:text-slate-100">{o.subject}: </span>
              {o.why}
            </li>
          ))}
        </ul>
        <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          この順序は目安です。すでに得意な科目があれば、そこから始めて早めの成功体験を作るのも有効です。
        </p>
      </div>

      <TryIt label="やってみよう：優先順位クイズ">
        <Quiz
          questions={[
            {
              question: "ゼロからスタートする場合、最初に着手すべき科目としてよく推奨されるのは？",
              choices: ["地歴（暗記量が多いため後回しにできない）", "英語（配点が大きく全科目の土台）", "国語（対策が最も難しいため）"],
              correctIndex: 1,
              explanation:
                "英語は配点が大きく、他科目の学習にも波及する土台的な科目のため、最初に着手するのが定石です。",
            },
          ]}
        />
      </TryIt>
    </PageShell>
  );
}
