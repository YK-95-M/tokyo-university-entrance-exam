export type ExerciseCategory =
  | "chest"
  | "back"
  | "legs"
  | "shoulders"
  | "arms"
  | "abs";

export type Exercise = {
  id: string;
  name: string;
  category: ExerciseCategory;
  icon: string;
};

export const CATEGORY_LABELS: Record<ExerciseCategory, string> = {
  chest: "胸",
  back: "背中",
  legs: "脚",
  shoulders: "肩",
  arms: "腕",
  abs: "腹筋",
};

export const CATEGORY_ORDER: ExerciseCategory[] = [
  "chest",
  "back",
  "legs",
  "shoulders",
  "arms",
  "abs",
];

export const EXERCISES: Exercise[] = [
  { id: "bench-press", name: "ベンチプレス", category: "chest", icon: "🏋️‍♂️" },
  { id: "dumbbell-press", name: "ダンベルプレス", category: "chest", icon: "🏋️" },
  { id: "push-up", name: "腕立て伏せ", category: "chest", icon: "🤸" },
  { id: "dumbbell-fly", name: "ダンベルフライ", category: "chest", icon: "🦋" },
  { id: "deadlift", name: "デッドリフト", category: "back", icon: "🏋️‍♀️" },
  { id: "pull-up", name: "懸垂", category: "back", icon: "🧗" },
  { id: "lat-pulldown", name: "ラットプルダウン", category: "back", icon: "🪢" },
  { id: "bent-over-row", name: "ベントオーバーロウ", category: "back", icon: "🚣" },
  { id: "squat", name: "スクワット", category: "legs", icon: "🦵" },
  { id: "leg-press", name: "レッグプレス", category: "legs", icon: "🦿" },
  { id: "leg-extension", name: "レッグエクステンション", category: "legs", icon: "🦶" },
  { id: "calf-raise", name: "カーフレイズ", category: "legs", icon: "👟" },
  { id: "shoulder-press", name: "ショルダープレス", category: "shoulders", icon: "🤲" },
  { id: "side-raise", name: "サイドレイズ", category: "shoulders", icon: "🦅" },
  { id: "upright-row", name: "アップライトロウ", category: "shoulders", icon: "⛓️" },
  { id: "arm-curl", name: "アームカール", category: "arms", icon: "💪" },
  { id: "triceps-extension", name: "トライセプスエクステンション", category: "arms", icon: "🔨" },
  { id: "hammer-curl", name: "ハンマーカール", category: "arms", icon: "🔩" },
  { id: "crunch", name: "クランチ", category: "abs", icon: "🌀" },
  { id: "plank", name: "プランク", category: "abs", icon: "🧘" },
  { id: "leg-raise", name: "レッグレイズ", category: "abs", icon: "🧎" },
];

export const EXERCISE_MAP: Record<string, Exercise> = Object.fromEntries(
  EXERCISES.map((e) => [e.id, e])
);
