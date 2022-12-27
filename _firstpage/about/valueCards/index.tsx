import React, { CSSProperties } from "react";
import style from "./style.module.scss";
import Image from "next/image";
// import picture "../../../../public/resized/svg/handshake.svg"

interface valueProps {
  id: number;
  h3: string;
  p: string;
  icon: string;
}

export default function Valuecards({ data }: any) {
  // console.log(data);

  const order = 1;

  // const myLoader = ({ src, width, quality }) => {
  //   return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
  // };

  return (
    <>
      <div className={style.values} id="values">
        {data.map((item: valueProps) => (
          <span
            style={{ "--icon": "red" } as React.CSSProperties}
            className={style.span}
            key={item.id}
          >
            <div className={style.valueInfo}>
              <h3 className={style.h3}>{item.h3}</h3>
              <p className={style.p}>{item.p}</p>
            </div>
            <div className={style.icon}>
              <Image
                height={82}
                width={82}
                alt="Logo holder"
                src={`/resized/svg/${item.icon}`}
              />
            </div>
          </span>
        ))}
      </div>
    </>
  );
}
