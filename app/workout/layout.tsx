import type { Metadata } from "next";
import { WorkoutProvider } from "@/lib/workout/store";
import { BottomNav } from "@/components/workout/BottomNav";

export const metadata: Metadata = {
  title: "筋トレログ",
  description: "日々の筋トレを記録し、種目ごとの成長をグラフで確認できるトレーニング記録アプリ。",
};

export default function WorkoutLayout({ children }: { children: React.ReactNode }) {
  return (
    <WorkoutProvider>
      <div className="flex min-h-full flex-1 flex-col bg-slate-50 dark:bg-slate-950">
        <div className="mx-auto flex w-full max-w-md flex-1 flex-col">
          <header className="sticky top-0 z-10 flex items-center gap-2 border-b border-slate-200 bg-white/90 px-4 py-3 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
            <span className="text-xl">💪</span>
            <h1 className="text-base font-bold tracking-tight text-slate-900 dark:text-slate-50">
              筋トレログ
            </h1>
          </header>
          <main className="flex-1 overflow-y-auto px-4 pb-6 pt-4">{children}</main>
          <BottomNav />
        </div>
      </div>
    </WorkoutProvider>
  );
}
