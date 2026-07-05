import { PageShell } from "@/components/todai/PageShell";
import { DiagramCard } from "@/components/todai/DiagramCard";
import { MetaphorBox } from "@/components/todai/MetaphorBox";
import { TryIt } from "@/components/todai/TryIt";

export const metadata = { title: "スランプ・停滞期の乗り越え方 | 東大攻略クエスト" };

export default function Page() {
  return (
    <PageShell sectionSlug="continue" pageSlug="slump">
      <DiagramCard caption="伸びは直線ではなく「階段状」（しばらく横ばい→急に伸びる）">
        <svg viewBox="0 0 300 100" className="h-auto w-full max-w-md">
          <path
            d="M10 85 L60 85 L60 65 L120 65 L120 68 L180 68 L180 30 L240 30 L240 32 L290 32"
            fill="none"
            stroke="#10b981"
            strokeWidth="3"
          />
          <text x="90" y="80" fontSize="8" textAnchor="middle" fill="#64748b" className="dark:fill-slate-400">
            溜め期
          </text>
          <text x="200" y="60" fontSize="8" textAnchor="middle" fill="#64748b" className="dark:fill-slate-400">
            溜め期
          </text>
          <text x="150" y="20" fontSize="8" textAnchor="middle" fill="#059669" fontWeight="bold">
            ある日急に伸びる
          </text>
        </svg>
      </DiagramCard>

      <MetaphorBox>
        停滞期は<strong>「今は溜め期」</strong>。ゲームの経験値バーも、次のレベルまで貯まるまでは
        見た目に変化がなくても、裏側では確実に経験値が溜まっています。
        伸びが見えないからといって、努力がゼロというわけではありません。
      </MetaphorBox>

      <div className="space-y-2">
        <p className="text-xs font-bold tracking-wide text-slate-400">もう少しくわしく</p>
        <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          <li>
            学力の伸びは、努力量に比例した直線ではなく、
            <strong>「しばらく横ばい→ある日一気に伸びる」階段状</strong>になることが多いです。
          </li>
          <li>
            停滞期に焦って勉強法をコロコロ変えるのは逆効果になりがち。
            <strong>やり方が正しければ、続けることが最優先</strong>です。
          </li>
          <li>
            それでも本当に伸びが悪い場合は、03章「メタ認知」で振り返り、
            やり方自体にズレがないかを点検しましょう。
          </li>
          <li>
            停滞を感じたら、04章「進捗の測り方」の長期グラフを見返し、
            短期の一喜一憂ではなく長期トレンドで判断するのがコツです。
          </li>
        </ul>
      </div>

      <TryIt label="やってみよう：停滞期の乗り越え方メモ">
        <p className="text-sm text-slate-600 dark:text-slate-300">
          「最近伸びを感じない」と思ったとき、①やり方は変えずに続けているか
          ②振り返り（メタ認知）はできているか、の2つだけ自分に確認してみましょう。
          両方できていれば、今は溜め期である可能性が高いです。
        </p>
      </TryIt>
    </PageShell>
  );
}
