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
              className={`font-ryumin-medium self-stretch ${styles.maxwidth} relative text-white ${styles.fontsize}`}
            >
              {description}{" "}
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
