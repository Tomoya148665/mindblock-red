import React from "react";
import styles from "../pages/styles.module.css";

interface FinalpageProps {
  description: string;
}

const Finalpage: React.FC<FinalpageProps> = ({ description }) => {
  return (
    <div
      className={`${styles.background3} w-full relative h-screen self-stretch flex-auto overflow-hidden flex flex-col items-center lg:items-center justify-between gap-[10px] `}
    >
      <div className="absolute bottom-1 right-3 text-white text-[20px]">06</div>

      <div
        className={`flex flex-col items-start  ${styles.padding3} ${styles.gap2}`}
      >
        <div>
          <div
            className={`font-ryumin-ultra text-white font-black ${styles.fontsize2}`}
          >
            マインドブロックはいかに”幻”か？{" "}
          </div>
        </div>
        <div>
          <div className="flex justify-center ">
            <div
              className={`font-ryumin-medium self-stretch ${styles.maxwidth} relative text-white ${styles.fontsize3}`}
            >
              USERさんの信念「自分がやりきればうまくいく」という考えは、貴重な駆動力を与えてくれますが、実際には勘違いかもしれません。ちょっとした例話で考えてみましょう。
              想像してみてください、あなたは一人でポートを漕いでいます。どんなに強く前向きに潤いでも、川の流れや風の向きによってはなかなか進まないことがあります。これはつまり、あなたの努力だけではなく、周りの環境や他人の力、時には運も大きな役割を果たしているということです。
              あなたの家族背景からも、高い期待や厳格な標準に照らして自己評価をしている傾向があります。しかし、これは全てが自分の手の中にあるわけではないという真実を見落としている可能性があります。また、ご両親の期待を背負って育ってきたため、高い自
              日効力感を持ちつつも、それが現実と必ずしも一致しない相違を生み出す原因になっているのかもしれません。
              仕事においても、あなたひとりの努力だけでは解決しない局面があります。会社の資金調達やITサービスの売上拡大は、単独でなんとかできるものではないのです。チームや他部門、さらには市場の状況など、多くの要因が絡まっています。
              ですから、「自分がやりきればうまくいく」という信念は、修正が必要です。あなたの努力は大切ですが、より幸せで成功したいと思うなら、周囲の力を借りること、そして時には自分を許し、流れに身を任せることも大切だということを忘れないでください。
            </div>
          </div>
        </div>
      </div>
      <div
        className={`relative ${styles.imageSize} object-cover`}
        style={{
          backgroundImage: "url('/girl.png')",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      />
    </div>
  );
};

export default Finalpage;
