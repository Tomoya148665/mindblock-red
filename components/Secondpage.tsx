import React from "react";
import styles from "../pages/styles.module.css";

interface SecondpageProps {
  description: string;
  name: string;
}

const Secondpage: React.FC<SecondpageProps> = ({ description, name }) => {
  return (
    <div
      className={`${styles.background3} w-full relative h-screen self-stretch flex-auto overflow-hidden flex flex-col items-center lg:items-center justify-between gap-[10px] `}
    >
      <div className="absolute bottom-1 right-3 text-white text-[20px]">02</div>
      <div
        className={`flex flex-col items-start  ${styles.padding3} ${styles.gap}`}
      >
        <div>
          <div className={`text-white font-ryumin-ultra ${styles.fontsize2}`}>
            あなたのマインドブロック
          </div>
          <div className="bg-white flex items-center justify-center space-x-10 inline-flex">
            <div
              className={`text-[#B34433] ${styles.fontsize} font-ryumin-ultra font-black break-words`}
            >
              {name}
            </div>
          </div>
        </div>
        <div>
          <div className={`font-ryumin-ultra text-white ${styles.fontsize2}`}>
            マインドブロックの解説
          </div>
          <div className="flex justify-center ">
            <div
              className={`font-ryumin-medium self-stretch ${styles.maxwidth} relative text-white ${styles.fontsize}`}
            >
              {description}
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

export default Secondpage;
