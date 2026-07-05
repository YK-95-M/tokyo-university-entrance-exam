import { PageShell } from "@/components/todai/PageShell";
import { DiagramCard } from "@/components/todai/DiagramCard";
import { MetaphorBox } from "@/components/todai/MetaphorBox";
import { TryIt } from "@/components/todai/TryIt";

export const metadata = { title: "仲間・記録・ごほうび設計 | 東大攻略クエスト" };

export default function Page() {
  return (
    <PageShell sectionSlug="continue" pageSlug="community">
      <DiagramCard caption="一人旅より、パーティを組んだほうが長丁場を走り切れる">
        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-900">
            <p className="text-2xl">🧑‍🤝‍🧑</p>
            <p className="mt-1 text-xs font-bold text-slate-800 dark:text-slate-100">仲間</p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">SNS・勉強会で状況共有</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-900">
            <p className="text-2xl">📓</p>
            <p className="mt-1 text-xs font-bold text-slate-800 dark:text-slate-100">記録</p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">学習ログ・ストリーク</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-900">
            <p className="text-2xl">🎁</p>
            <p className="mt-1 text-xs font-bold text-slate-800 dark:text-slate-100">ごほうび</p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">週末の楽しみを用意</p>
          </div>
        </div>
      </DiagramCard>

      <MetaphorBox>
        長期戦のRPGほど、<strong>一人旅よりパーティを組んだほうが有利</strong>です。
        仲間がいれば「今日もやった」を報告し合うだけで継続の後押しになります。
      </MetaphorBox>

      <div className="space-y-2">
        <p className="text-xs font-bold tracking-wide text-slate-400">もう少しくわしく</p>
        <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          <li>
            <strong>仲間</strong>: SNSや学習コミュニティで進捗を報告するだけでも、
            「途切れさせたくない」という心理が働き継続しやすくなります。
          </li>
          <li>
            <strong>記録</strong>: 学習ログや本サイトのストリーク表示を使い、
            「連続日数を途切れさせたくない」感覚を利用します。
          </li>
          <li>
            <strong>ごほうび</strong>: 週末に小さな楽しみ（好きなものを食べる、など）を用意し、
            「今週も頑張ったから」という区切りを作ると、長期戦のメリハリがつきます。
          </li>
        </ul>
      </div>

      <TryIt label="やってみよう：3つの仕組みを1つずつ用意する">
        <p className="text-sm text-slate-600 dark:text-slate-300">
          「誰かに進捗を報告する場所」「記録するツール」「週末のごほうび」を、
          それぞれ1つずつ今日中に決めてみましょう。仕組み化してしまえば、意志の力に頼らずに済みます。
        </p>
      </TryIt>
    </PageShell>
  );
}
