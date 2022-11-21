import React from "react";
import Image from "next/image";

// https://ja.splidejs.com/guides/options/
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";

// css
import styles from "../../styles/Splide/index.module.css";

// type
type Props = {
  srcList: string[];
};

export const OrSplide: React.FC<Props> = React.memo(({ srcList }) => {
  return (
    <>
      <Splide
        aria-label="私のお気に入りの画像集"
        options={{
          autoplay: true, // 自動再生を有効
          interval: 3000, // 自動再生の間隔
          rewind: true, // スライダーの巻き戻し
          rewindSpeed: 1000, // スライダーの巻き戻し時間
          width: 750, // アスペクト比3:2
        }}
      >
        {srcList.map((src, index) => {
          return (
            <SplideSlide key={index}>
              <Image
                src={src}
                alt={index.toString()}
                width={750}
                height={500}
              />
            </SplideSlide>
          );
        })}
      </Splide>
    </>
  );
});
