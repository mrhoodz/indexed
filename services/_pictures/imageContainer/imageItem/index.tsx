import React from "react";
import style from "./style.module.scss";
import Image from "next/image";

export default function ImageItem({ data }: any) {
  interface imageDataProps {
    id: number;
    src: string;
  }

// console.log(data)

  return (
    <>
      {data.map((item: any, index: any) => (
          <Image
          height={1080}
          width={1920}
            key={index}
            className={style.img}
            src={`http://127.0.0.1:1337${item.attributes.url}`}
            alt="image goes here"
          />
      ))}
    </>
  );
}
