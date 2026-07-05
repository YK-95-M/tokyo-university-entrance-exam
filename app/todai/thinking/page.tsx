import { SectionIndexPage } from "@/components/todai/SectionIndexPage";
import { MetaphorBox } from "@/components/todai/MetaphorBox";

export const metadata = { title: "03 地力を鍛える | 東大攻略クエスト" };

export default function Page() {
  return (
    <SectionIndexPage sectionSlug="thinking">
      <MetaphorBox>
        地頭は生まれつきの才能ではなく、<strong>「抽象化・分解・パターン認識・仮説思考・数感・メタ認知」</strong>
        という6つの鍛えられる考え方のクセ。02章「勉強のやり方」と対で運用することで、
        日々の勉強そのものが地頭トレーニングになります。
      </MetaphorBox>
    </SectionIndexPage>
  );
}
