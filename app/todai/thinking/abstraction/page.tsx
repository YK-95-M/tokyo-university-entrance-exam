import { PageShell } from "@/components/todai/PageShell";
import { DiagramCard } from "@/components/todai/DiagramCard";
import { MetaphorBox } from "@/components/todai/MetaphorBox";
import { TryIt } from "@/components/todai/TryIt";
import { Quiz } from "@/components/todai/Quiz";

export const metadata = { title: "抽象化↔具体化 | 東大攻略クエスト" };

export default function Page() {
  return (
    <PageShell sectionSlug="thinking" pageSlug="abstraction">
      <DiagramCard caption="地図の縮尺を変える＝視点をズームイン・ズームアウトする">
        <svg viewBox="0 0 300 100" className="h-auto w-full max-w-md">
          <circle cx="70" cy="50" r="40" fill="none" stroke="#818cf8" strokeWidth="2" />
          <circle cx="70" cy="50" r="4" fill="#818cf8" />
          <text x="70" y="95" textAnchor="middle" fontSize="9" fill="#334155" className="dark:fill-slate-300">
            具体（拡大図）
          </text>
          <text x="150" y="55" fontSize="18" fill="#94a3b8" textAnchor="middle">↔</text>
          <rect x="215" y="35" width="60" height="30" fill="none" stroke="#818cf8" strokeWidth="2" />
          <text x="245" y="95" textAnchor="middle" fontSize="9" fill="#334155" className="dark:fill-slate-300">
            抽象（全体図）
          </text>
        </svg>
      </DiagramCard>

      <MetaphorBox>
        抽象化↔具体化は<strong>地図の縮尺を変える</strong>のと同じ。
        住所の1本の道（具体）を見ているだけでは迷子になりますが、
        都道府県レベルの地図（抽象）まで引くと全体の位置関係が分かります。両方を行き来する力が大事です。
      </MetaphorBox>

      <div className="space-y-2">
        <p className="text-xs font-bold tracking-wide text-slate-400">もう少しくわしく</p>
        <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          <li>
            <strong>抽象化</strong>: 具体的な事例やデータから「要するに何が言いたいか」を一言で取り出す力。
          </li>
          <li>
            <strong>具体化</strong>: 抽象的な主張に対して「たとえば？」「具体的には？」と例を足す力。
          </li>
          <li>
            現代文の要約や、数学の「この問題の本質は何か」を見抜く力の土台になります。
          </li>
          <li>
            鍛え方はシンプル：日々の勉強で長い説明を読んだら、必ず<strong>「要するに一言で言うと？」</strong>
            と自分に問いかける。逆に短い定義を読んだら<strong>「たとえばどんな例？」</strong>と問いかける。
          </li>
        </ul>
      </div>

      <TryIt label="やってみよう：一言でまとめるドリル">
        <Quiz
          questions={[
            {
              question:
                "「東大の二次試験は全問記述式で、暗記した公式をそのまま当てはめるだけでは解けず、その場で知識を関連づけて考える力が問われる」を一言でまとめると？",
              choices: [
                "東大は暗記量が全て",
                "東大は思考力重視の試験",
                "東大は記述の文字数が多い",
              ],
              correctIndex: 1,
              explanation:
                "文章の細部（記述式・公式の当てはめ不可）はすべて「思考力重視」という一言に集約できます。これが抽象化です。",
            },
          ]}
        />
      </TryIt>
    </PageShell>
  );
}
