// このファイルはサイト全体の目次(情報設計)の単一の情報源。
// ナビ・進捗計算・クエストマップはすべてここから生成する。

export type PageMeta = {
  slug: string;
  title: string;
  quest: string; // RPG風の一言(関門ラベル)
  summary: string;
};

export type SectionMeta = {
  id: string; // "00" ... "06"
  slug: string;
  title: string;
  kicker: string; // RPGでいう章タイトル
  summary: string;
  color: string; // tailwindのアクセント色名 (例: "emerald")
  pages: PageMeta[];
};

export const SECTIONS: SectionMeta[] = [
  {
    id: "00",
    slug: "intro",
    title: "はじめに",
    kicker: "クエスト開始前のブリーフィング",
    summary: "東大合格という長い冒険を始める前に、大変さと攻略マップの見方を正直に共有する章。",
    color: "slate",
    pages: [
      {
        slug: "how-hard",
        title: "東大合格ってどれくらい大変？",
        quest: "ブリーフィング1: ラスボスの強さを知る",
        summary: "隠さずに難易度を伝えたうえで、攻略可能なクエストだと示す。",
      },
      {
        slug: "map-guide",
        title: "攻略マップの見方",
        quest: "ブリーフィング2: マップの読み方",
        summary: "このサイトのクエストマップ・スキルツリー・進捗の見方を先に理解する。",
      },
    ],
  },
  {
    id: "01",
    slug: "enemy",
    title: "敵を知る",
    kicker: "第1章: 東大入試のしくみ",
    summary: "相手（東大入試）の構造を知らずに攻略はできない。全体像・配点・科類・科目・逆算をおさえる。",
    color: "rose",
    pages: [
      {
        slug: "overview",
        title: "入試の全体像",
        quest: "関門1: 共テ → 二次の流れ",
        summary: "共通テストと二次試験、2段構えの全体フローを図でつかむ。",
      },
      {
        slug: "scoring",
        title: "配点のカラクリ",
        quest: "関門2: どこに投資すべきか",
        summary: "二次が合否の主役。お金の配分にたとえて時間投資の方針を決める。",
      },
      {
        slug: "tracks",
        title: "科類の選び方",
        quest: "関門3: 自分の入口を選ぶ",
        summary: "文科・理科、自分に合う科類のイメージをつかむ。",
      },
      {
        slug: "subject-map",
        title: "必要科目マップ",
        quest: "関門4: 戦う武器を確認する",
        summary: "共テ科目と二次科目を一覧図で整理する。",
      },
      {
        slug: "reverse-plan",
        title: "ゴールから逆算",
        quest: "関門5: 合格点から今を測る",
        summary: "合格点と今の自分の差を可視化し、埋めるべきギャップを知る。",
      },
    ],
  },
  {
    id: "02",
    slug: "method",
    title: "装備を整える",
    kicker: "第2章: 勉強のやり方（このサイトの心臓）",
    summary: "内容より先に「やり方」。記憶・復習・過去問・ノート・時間術という装備を整える。",
    color: "amber",
    pages: [
      {
        slug: "what-is-studying",
        title: "そもそも「勉強」とは",
        quest: "装備1: 勉強の3工程を知る",
        summary: "インプット→定着→アウトプットという勉強の設計図を最初に理解する。",
      },
      {
        slug: "forgetting-curve",
        title: "記憶のしくみ",
        quest: "装備2: ザルで水をすくう",
        summary: "忘れるのは正常。忘却曲線を図解し、思い出す練習の効果を知る。",
      },
      {
        slug: "spaced-repetition",
        title: "復習の黄金ルール",
        quest: "装備3: 筋トレ式の復習",
        summary: "間隔をあけて繰り返す黄金パターンをフラッシュカードで体験する。",
      },
      {
        slug: "past-papers",
        title: "過去問の正しい使い方",
        quest: "装備4: 過去問は設計図",
        summary: "腕試しではなく、最初に見てゴールから逆算する道具として使う。",
      },
      {
        slug: "notes-trap",
        title: "ノート・まとめの罠",
        quest: "装備5: きれいなノートの罠",
        summary: "まとめ作業＝勉強した気になる沼。時間対効果で見直す。",
      },
      {
        slug: "time-hacks",
        title: "集中・スキマ時間の作り方",
        quest: "装備6: 社会人の時間術",
        summary: "通勤・昼休みなどスキマ時間を束ねて学習時間に変える。",
      },
    ],
  },
  {
    id: "03",
    slug: "thinking",
    title: "地力を鍛える",
    kicker: "第3章: 地頭トレーニング（勉強法と対になる心臓）",
    summary: "地頭は生まれつきではなく鍛えられる「考え方のクセ」。6つのスキルを日々の勉強に埋め込む。",
    color: "indigo",
    pages: [
      {
        slug: "growth",
        title: "地頭は生まれつき？",
        quest: "内功1: 固定マインドセットを疑う",
        summary: "「地頭固定」の思い込みを解き、鍛えられる範囲が大きいことを正直に示す。",
      },
      {
        slug: "abstraction",
        title: "抽象化↔具体化",
        quest: "内功2: 地図の縮尺を変える",
        summary: "「要するに？」「たとえば？」の往復ドリルで抽象化力を鍛える。",
      },
      {
        slug: "decomposition",
        title: "問題を分解する",
        quest: "内功3: 大きな荷物を小分けに",
        summary: "大問を解ける小問へ切り分けるワーク。",
      },
      {
        slug: "pattern",
        title: "パターン認識・転用",
        quest: "内功4: 料理の基本の型",
        summary: "「この問題は前のどれと同じ型？」を見抜く、東大数学で決定的なスキル。",
      },
      {
        slug: "hypothesis",
        title: "仮説思考",
        quest: "内功5: 先に目的地を決める",
        summary: "解く前に答えの見当・方針を立ててから動く練習。",
      },
      {
        slug: "estimation",
        title: "数感・推定",
        quest: "内功6: ざっくり暗算力",
        summary: "フェルミ推定で検算・選択肢の絞り込み力を鍛える。",
      },
      {
        slug: "metacognition",
        title: "メタ認知",
        quest: "内功7（親玉）: 試合のビデオを見返す",
        summary: "「なぜ間違えた？」を振り返る、地頭の伸び率を決める最重要スキル。",
      },
    ],
  },
  {
    id: "04",
    slug: "roadmap",
    title: "攻略ルート",
    kicker: "第4章: 計画を立てる",
    summary: "何年計画で、どの科目から、週にどう回すか。地図を自分用にカスタムする。",
    color: "teal",
    pages: [
      {
        slug: "years",
        title: "何年計画にする？",
        quest: "地図1: 攻略年数シミュレータ",
        summary: "週の学習時間と年数を入力して、必要な総学習量を体感する。",
      },
      {
        slug: "subject-order",
        title: "科目の攻略順",
        quest: "地図2: 積み上げ順と配点効率",
        summary: "どの科目から手をつけるべきかの優先順位を決める。",
      },
      {
        slug: "weekly",
        title: "週の回し方",
        quest: "地図3: 仕事と両立するテンプレ",
        summary: "社会人が現実的に回せる週間スケジュールのひな型。",
      },
      {
        slug: "progress-check",
        title: "進捗の測り方",
        quest: "地図4: レベルを可視化する",
        summary: "模試・過去問の得点推移で自分のレベルを可視化する。",
      },
    ],
  },
  {
    id: "05",
    slug: "subjects",
    title: "ダンジョン攻略",
    kicker: "第5章: 科目別ガイド",
    summary: "科目ごとのダンジョン攻略ルートと、つまづきやすい部屋の入口をたとえと図解で。",
    color: "sky",
    pages: [
      {
        slug: "english",
        title: "英語",
        quest: "ダンジョン1: 土台にして最大の投資先",
        summary: "配点が大きく、すべての土台になる科目。まずここから。",
      },
      {
        slug: "math",
        title: "数学",
        quest: "ダンジョン2: 積み上げゲー",
        summary: "レベル上げを飛ばすと次の敵に勝てない、典型の積み上げ型科目。",
      },
      {
        slug: "japanese",
        title: "国語",
        quest: "ダンジョン3: 現代文・古文・漢文",
        summary: "3つの武器を使い分ける総合ダンジョン。",
      },
      {
        slug: "science",
        title: "理科",
        quest: "ダンジョン4: 理科各類の選択",
        summary: "物理・化学・生物・地学、選び方と入口。",
      },
      {
        slug: "social-studies",
        title: "地歴",
        quest: "ダンジョン5: 文科各類の選択",
        summary: "世界史・日本史・地理、選び方と入口。",
      },
      {
        slug: "information",
        title: "情報",
        quest: "ダンジョン6: 共テ新科目",
        summary: "新しく加わった科目の入口をおさえる。",
      },
    ],
  },
  {
    id: "06",
    slug: "continue",
    title: "継続の技術",
    kicker: "第6章: 心が折れないために",
    summary: "モチベに頼らない仕組み、停滞期の乗り越え方、直前期の過ごし方。",
    color: "fuchsia",
    pages: [
      {
        slug: "habit",
        title: "モチベに頼らない仕組み",
        quest: "後方支援1: 歯みがき化する",
        summary: "時間・場所・トリガーを固定して習慣化する。",
      },
      {
        slug: "slump",
        title: "スランプ・停滞期の乗り越え方",
        quest: "後方支援2: 今は溜め期",
        summary: "伸びは階段状。停滞は失敗ではないと知る。",
      },
      {
        slug: "community",
        title: "仲間・記録・ごほうび設計",
        quest: "後方支援3: パーティを組む",
        summary: "一人で戦わない仕組みと記録・ごほうびの設計。",
      },
      {
        slug: "final-stretch",
        title: "直前期の過ごし方",
        quest: "後方支援4: ラスボス直前の立ち回り",
        summary: "直前期特有の過ごし方と注意点。",
      },
    ],
  },
];

export function getSection(slug: string): SectionMeta | undefined {
  return SECTIONS.find((s) => s.slug === slug);
}

export function getPage(sectionSlug: string, pageSlug: string) {
  const section = getSection(sectionSlug);
  const page = section?.pages.find((p) => p.slug === pageSlug);
  if (!section || !page) return undefined;
  return { section, page };
}

export type FlatPage = {
  id: string; // "sectionSlug/pageSlug"
  href: string;
  section: SectionMeta;
  page: PageMeta;
  index: number; // 全体通し番号
};

export function getAllPages(): FlatPage[] {
  const flat: FlatPage[] = [];
  let i = 0;
  for (const section of SECTIONS) {
    for (const page of section.pages) {
      flat.push({
        id: `${section.slug}/${page.slug}`,
        href: `/todai/${section.slug}/${page.slug}`,
        section,
        page,
        index: i++,
      });
    }
  }
  return flat;
}

export function getAdjacentPages(sectionSlug: string, pageSlug: string) {
  const flat = getAllPages();
  const idx = flat.findIndex(
    (p) => p.section.slug === sectionSlug && p.page.slug === pageSlug
  );
  return {
    prev: idx > 0 ? flat[idx - 1] : undefined,
    next: idx >= 0 && idx < flat.length - 1 ? flat[idx + 1] : undefined,
    current: flat[idx],
  };
}

export const TOTAL_PAGE_COUNT = getAllPages().length;
