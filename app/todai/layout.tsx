import Link from "next/link";
import { ProgressProvider } from "@/lib/progress";
import { StreakBadge } from "@/components/todai/StreakBadge";
import { SECTIONS } from "@/lib/content/registry";

export default function TodaiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProgressProvider>
      <div className="flex min-h-full flex-col bg-slate-50 dark:bg-slate-950">
        <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
          <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
            <Link href="/todai" className="flex items-center gap-2 font-bold text-slate-900 dark:text-slate-50">
              <span aria-hidden>🗺️</span>
              <span className="text-sm sm:text-base">東大攻略クエスト</span>
            </Link>
            <div className="flex items-center gap-4">
              <nav className="hidden gap-3 text-xs font-semibold text-slate-500 dark:text-slate-400 lg:flex">
                {SECTIONS.map((s) => (
                  <Link
                    key={s.id}
                    href={`/todai/${s.slug}`}
                    className="whitespace-nowrap hover:text-slate-900 dark:hover:text-slate-100"
                  >
                    {s.id} {s.title}
                  </Link>
                ))}
              </nav>
              <StreakBadge />
            </div>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-slate-200 bg-white px-4 py-6 text-center text-xs text-slate-400 dark:border-slate-800 dark:bg-slate-950">
          <p>
            科目・配点・出題範囲は年度により変更されます。最新情報は必ず
            <a
              href="https://www.u-tokyo.ac.jp/ja/admissions/undergraduate/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-1 underline hover:text-slate-600 dark:hover:text-slate-200"
            >
              東京大学の公式入試情報
            </a>
            で確認してください。本サイトは非公式の学習支援コンテンツです。
          </p>
        </footer>
      </div>
    </ProgressProvider>
  );
}
