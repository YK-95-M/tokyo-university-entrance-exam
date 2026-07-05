"use client";

import { useEffect } from "react";
import { useProgress } from "@/lib/progress";

export function PageVisitTracker({ pageId }: { pageId: string }) {
  const { markVisited } = useProgress();
  useEffect(() => {
    markVisited(pageId);
  }, [pageId, markVisited]);
  return null;
}
