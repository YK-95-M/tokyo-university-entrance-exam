import { PageShell } from "@/components/todai/PageShell";
import { DiagramCard } from "@/components/todai/DiagramCard";
import { MetaphorBox } from "@/components/todai/MetaphorBox";
import { TryIt } from "@/components/todai/TryIt";

export const metadata = { title: "必要科目マップ | 東大攻略クエスト" };

export default function Page() {
  return (
    <PageShell sectionSlug="enemy" pageSlug="subject-map">
      <DiagramCard caption="共テ科目と二次科目の枠組み（概要・年度により詳細変更あり）">
        <div className="w-full overflow-x-auto">
          <table className="w-full min-w-[420px] border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800">
                <th className="border border-slate-300 p-2 text-left dark:border-slate-700">段階</th>
                <th className="border border-slate-300 p-2 text-left dark:border-slate-700">文科各類</th>
                <th className="border border-slate-300 p-2 text-left dark:border-slate-700">理科各類</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 p-2 font-bold dark:border-slate-700">共通テスト</td>
                <td className="border border-slate-300 p-2 dark:border-slate-700" colSpan={2}>
                  国語・数学（I・A / II・B・C）・外国語・地歴公民・理科・情報 など、多教科を広く受験
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-2 font-bold dark:border-slate-700">二次試験</td>
                <td className="border border-slate-300 p-2 dark:border-slate-700">
                  国語・数学・地理歴史（2科目）・外国語
                </td>
                <td className="border border-slate-300 p-2 dark:border-slate-700">
                  国語・数学・理科（2科目）・外国語
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-2 font-bold dark:border-slate-700">面接</td>
                <td className="border border-slate-300 p-2 dark:border-slate-700">なし</td>
                <td className="border border-slate-300 p-2 dark:border-slate-700">理科三類のみあり</td>
              </tr>
            </tbody>
          </table>
        </div>
      </DiagramCard>

      <MetaphorBox>
        科目セットは「装備一式」。文科系は<strong>地歴を2科目</strong>、理科系は
        <strong>理科を2科目</strong>装備する、というのが大きな違い。国語・数学・外国語は共通の基本装備です。
      </MetaphorBox>

      <div className="space-y-2">
        <p className="text-xs font-bold tracking-wide text-slate-400">もう少しくわしく</p>
        <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          <li>
            <strong>数学</strong>は文理どちらも二次で必須。ただし理科系のほうが試験時間・難度感が高い傾向。
          </li>
          <li>
            共通テストでは新課程の<strong>「情報」</strong>が加わっており、共テ科目としてカウントされます。
          </li>
          <li>
            共テの数学は新課程範囲（数学I・II・III・A・B・C の指定範囲）から出題されます。
          </li>
          <li>
            <strong>科目・配点・出題範囲は年度で変わるので、出願前に必ず最新の学生募集要項を確認してください。</strong>
          </li>
        </ul>
      </div>

      <TryIt label="やってみよう：自分の装備一式を書き出す">
        <p className="text-sm text-slate-600 dark:text-slate-300">
          「01_敵を知る／科類の選び方」で仮決めした科類をもとに、二次で戦う科目を4つ（国語・数学・地歴 or 理科・外国語）
          紙に書き出してみましょう。05章「ダンジョン攻略」でこの科目ごとの攻略ルートを渡します。
        </p>
      </TryIt>
    </PageShell>
  );
}
