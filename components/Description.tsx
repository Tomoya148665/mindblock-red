import React from "react";
import styles from "../pages/styles.module.css";

interface DescriptionProps {
  description?: React.ReactNode;
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
          <div className="flex items-center justify-center space-x-10 inline-flex">
            {subtitle && (
              <div
                className={`text-white ${styles.fontsize4} font-ryumin-bold break-words`}
              >
                {subtitle}
              </div>
            )}
          </div>
        </div>
        <div>
          <div className="flex justify-center ">
            <div
              className={`font-ryumin-medium self-stretch ${styles.maxwidth} relative text-white ${styles.fontsize3}`}
            >
              {description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
