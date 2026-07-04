import { PageShell } from "@/components/todai/PageShell";
import { DiagramCard } from "@/components/todai/DiagramCard";
import { MetaphorBox } from "@/components/todai/MetaphorBox";
import { TryIt } from "@/components/todai/TryIt";
import { Quiz } from "@/components/todai/Quiz";

export const metadata = { title: "情報 | 東大攻略クエスト" };

const AREAS = [
  { name: "情報社会と情報デザイン", note: "情報の特性・著作権・伝わる資料の作り方" },
  { name: "コンピュータとプログラミング", note: "アルゴリズム・簡単なプログラムの読み書き" },
  { name: "情報通信ネットワーク", note: "ネットワークの仕組み・情報セキュリティ" },
  { name: "データの活用", note: "統計的な考え方・データ分析の基礎" },
];

export default function Page() {
  return (
    <PageShell sectionSlug="subjects" pageSlug="information">
      <DiagramCard caption="共テ「情報」の4つの領域（新課程で追加された科目）">
        <div className="grid grid-cols-2 gap-3">
          {AREAS.map((a) => (
            <div
              key={a.name}
              className="rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-900"
            >
              <p className="text-xs font-bold text-slate-800 dark:text-slate-100">{a.name}</p>
              <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">{a.note}</p>
            </div>
          ))}
        </div>
      </DiagramCard>

      <MetaphorBox>
        「情報」は<strong>新しく追加された最新装備</strong>のようなもの。
        まだ過去問の蓄積が他科目より少ない分、公式が公開している試作問題・サンプル問題が
        最も信頼できる攻略情報になります。
      </MetaphorBox>

      <div className="space-y-2">
        <p className="text-xs font-bold tracking-wide text-slate-400">もう少しくわしく</p>
        <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          <li>
            共通テストの新科目として追加されており、社会人にとっては<strong>仕事で触れた経験が活きやすい</strong>
            科目でもあります（ネットワーク・セキュリティなど）。
          </li>
          <li>
            プログラミング的思考（順次・分岐・繰り返し）は、共通テスト用の疑似言語で出題されるため、
            実務の言語経験がなくても対応できます。
          </li>
          <li>
            他科目に比べて配点比重は大きくないことが多いですが、
            <strong>足切りに関わる共テ全体の得点</strong>には影響するため、基礎を落とさない対策が必要です。
          </li>
          <li>
            出題形式・範囲は年度で変わりやすい科目なので、必ず最新の公式情報・試作問題を確認してください。
          </li>
        </ul>
      </div>

      <TryIt label="やってみよう：領域の理解チェック">
        <Quiz
          questions={[
            {
              question: "共通テスト「情報」の対策で最も信頼できる情報源は？",
              choices: [
                "うわさベースのSNS情報",
                "大学入試センターなど公式が公開する試作・サンプル問題",
                "他科目の過去問をそのまま流用する",
              ],
              correctIndex: 1,
              explanation:
                "新しい科目なので、公式が公開する試作問題・サンプル問題が最も信頼できる出題形式の手がかりです。",
            },
          ]}
        />
      </TryIt>
    </PageShell>
  );
}
