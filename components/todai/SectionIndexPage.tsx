import { getSection } from "@/lib/content/registry";
import { PageCard } from "@/components/todai/PageCard";

export function SectionIndexPage({
  sectionSlug,
  children,
}: {
  sectionSlug: string;
  children?: React.ReactNode;
}) {
  const section = getSection(sectionSlug);
  if (!section) return null;

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:py-12">
      <p className="mb-2 inline-block rounded-full bg-slate-900 px-3 py-1 text-xs font-bold text-white dark:bg-slate-100 dark:text-slate-900">
        第{section.id}章 ・ {section.kicker}
      </p>
      <h1 className="mb-3 text-2xl font-bold text-slate-900 dark:text-slate-50 sm:text-3xl">
        {section.title}
      </h1>
      <p className="mb-8 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        {section.summary}
      </p>

      {children && <div className="mb-8 space-y-6">{children}</div>}

      <div className="space-y-3">
        {section.pages.map((page, i) => (
          <PageCard
            key={page.slug}
            sectionSlug={section.slug}
            page={page}
            index={i}
          />
        ))}
      </div>
    </div>
  );
}
