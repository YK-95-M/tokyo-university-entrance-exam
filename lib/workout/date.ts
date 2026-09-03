import { todayKey } from "./store";

const WEEKDAYS = ["日", "月", "火", "水", "木", "金", "土"];

export function parseDateKey(dateKey: string): Date {
  const [y, m, d] = dateKey.split("-").map(Number);
  return new Date(y, m - 1, d);
}

export function formatDateLabel(dateKey: string): string {
  const d = parseDateKey(dateKey);
  const label = `${d.getMonth() + 1}月${d.getDate()}日(${WEEKDAYS[d.getDay()]})`;
  return dateKey === todayKey() ? `${label}・今日` : label;
}

export function shiftDateKey(dateKey: string, deltaDays: number): string {
  const d = parseDateKey(dateKey);
  d.setDate(d.getDate() + deltaDays);
  return todayKey(d);
}

export function formatShortDate(dateKey: string): string {
  const d = parseDateKey(dateKey);
  return `${d.getMonth() + 1}/${d.getDate()}`;
}
