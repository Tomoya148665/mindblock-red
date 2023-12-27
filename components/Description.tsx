import React from "react";
import styles from "../pages/styles.module.css";

interface DescriptionProps {
  description: string;
  number: string;
  title: string;
  subtitle: string;
}

const Description: React.FC<DescriptionProps> = ({
  title,
  description,
  number,
  subtitle,
}) => {
  return (
    <div
      className={`${styles.background3} w-full relative h-screen self-stretch flex-auto overflow-hidden flex flex-col items-start lg:items-center justify-start gap-[10px] `}
    >
      <div className="absolute bottom-1 right-3 text-white text-[20px]">
        {number}
      </div>

      <div
        className={`flex flex-col items-start  ${styles.padding2} ${styles.gap2}`}
      >
        <div>
          <div
            className={`font-ryumin-ultra text-white font-black ${styles.fontsize2} ${styles.lineheight}`}
          >
            {title}
          </div>
          <div className=" flex items-center justify-center space-x-10 inline-flex">
            <div
              className={`text-white ${styles.fontsize2} font-ryumin-bold break-words`}
            >
              {subtitle}
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center ">
            <div
              className={`font-ryumin-medium self-stretch ${styles.maxwidth} relative text-white ${styles.fontsize3}`}
            >
              <p>
                1.リスクの過小評価と責任の過負荷**
                <br />
                <br />
                あなたの信じている「自分がやりきれば、必ずうまくいく」という考えは、実際のリスクを理解する上で障害になっています。
                INT」の性格傾向から、論理的かつ計画的に物事を進めるあなたにとって、全てをコントロールしようとするこの念は、予想外の障害や失敗に直面した時に大きなストレスとなり得ます。この念が原因で、事業の難題や日々の業務において無理をしてしまい、過剰な責任感からくる過労やストレスに繋がっているかもしれません。
                <br />
                <br />
                **2.チームワークと柔軟性の欠如**
                <br />
                <br />
                父親からの厳しい基準と、母親の常識的かつ保守的な価値観は、あなたが「自力での成功」を深くじるように影響を及ぼしている可能性があります。しかし、現実には、個人で全てを解決することは困難です。職場での資金調達やサービスの拡大など、他者との協力が必要な場面では、あなたのこの念が柔軟なチームワークを築くことを妨げ、目標を達成する過程で孤立する原因になっているかもしれません。
                <br />
                <br /> **3.自己認識と許容の欠如**
                <br />
                <br />
                ホーキンズ博士の理論における中性の意識レベルは、バランスを意味しますが、あなたの場合、自分がコントロールしきれない要素を受け入れることができていないかもしれません。完璧を求めるあまり、”もっと頑張れる”というプレッシャーが、目の前の仕事に集中しきれない原因になっています。また、過去の失恋や喧嘩の記憶が、今のあなたの努力すべき点とエネルギーの方向性を歪めている事象も想定されます。
                このマインドブロックを乗り越え、成功への道を歩むためには、事象に対する認識をアップデートし、自分だけでなく他人や環境とも調和を図る柔軟性が重要です。自身の念を見直し、成長への道を見つけてください。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
