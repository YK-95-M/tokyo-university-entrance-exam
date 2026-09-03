import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ホーム",
  description: "東大攻略クエストと筋トレログへのポータルページ。",
};

const APPS = [
  {
    href: "/todai",
    icon: "🗺️",
    title: "東大攻略クエスト",
    description: "社会人ゼロから東京大学合格を目指す学習サイト",
  },
  {
    href: "/workout",
    icon: "💪",
    title: "筋トレログ",
    description: "日々の筋トレを記録し、種目ごとの成長をグラフで確認",
  },
];

export default function RootPage() {
  return (
    <div className="flex min-h-full flex-1 items-center justify-center bg-slate-50 px-4 py-12 dark:bg-slate-950">
      <div className="w-full max-w-md space-y-6">
        <div className="grid gap-4 sm:grid-cols-2">
          {APPS.map((app) => (
            <Link
              key={app.href}
              href={app.href}
              className="flex flex-col items-center gap-2 rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-colors hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700"
            >
              <span className="text-3xl">{app.icon}</span>
              <span className="font-bold text-slate-900 dark:text-slate-50">{app.title}</span>
              <span className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                {app.description}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
