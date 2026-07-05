import Link from "next/link";
import { getAdjacentPages, getPage } from "@/lib/content/registry";
import { NextStep } from "@/components/todai/NextStep";
import { PageVisitTracker } from "@/components/todai/PageVisitTracker";

export function PageShell({
  sectionSlug,
  pageSlug,
  children,
}: {
  sectionSlug: string;
  pageSlug: string;
  children: React.ReactNode;
}) {
  const found = getPage(sectionSlug, pageSlug);
  if (!found) return null;
  const { section, page } = found;
  const { next } = getAdjacentPages(sectionSlug, pageSlug);
  const pageId = `${sectionSlug}/${pageSlug}`;

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:py-12">
      <PageVisitTracker pageId={pageId} />
      <nav className="mb-4 flex flex-wrap items-center gap-1 text-xs text-slate-400">
        <Link href="/todai" className="hover:text-slate-600 dark:hover:text-slate-200">
          クエストマップ
        </Link>
        <span>/</span>
        <Link
          href={`/todai/${section.slug}`}
          className="hover:text-slate-600 dark:hover:text-slate-200"
        >
          {section.id} {section.title}
        </Link>
        <span>/</span>
        <span className="text-slate-500 dark:text-slate-300">{page.title}</span>
      </nav>

      <p className="mb-2 inline-block rounded-full bg-slate-900 px-3 py-1 text-xs font-bold text-white dark:bg-slate-100 dark:text-slate-900">
        {page.quest}
      </p>
      <h1 className="mb-8 text-2xl font-bold text-slate-900 dark:text-slate-50 sm:text-3xl">
        {page.title}
      </h1>

      <div className="space-y-8">{children}</div>

      <div className="mt-12">
        {next ? (
          <NextStep
            href={next.href}
            label={`${next.section.id === section.id ? "" : `${next.section.id} ${next.section.title}: `}${next.page.title}`}
            description={next.page.summary}
          />
        ) : (
          <NextStep
            href="/todai"
            label="クエストマップに戻る"
            description="ここまでで全クエスト踏破！自分の攻略ルートを見直そう。"
          />
        )}
      </div>
    </div>
  );
}
