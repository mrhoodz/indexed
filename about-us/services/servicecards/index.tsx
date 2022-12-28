import React from "react";
import style from "./style.module.scss";
import Image from "next/image";
import Link from "next/link";

interface serviceCardsProps {
  id: number;
  p: string;
  image: string;
}

export default function ServiceCards({ data }: any) {
  console.log(data);

  return (
    <>
      {data.map((item: any) => (
        <Link
          href={`services/${item.slug}`}
          key={Math.random()}
          className={style.serviceCard}
        >
          <Image
            width={1920}
            height={1080}
            className={style.serviceCardImage}
            // src={`https://sea-lion-app-ggqop.ondigitalocean.app${item.url}`}
            src={`https://sea-lion-app-ggqop.ondigitalocean.app${item.Images.data[0].attributes.url}`}
            alt="services image goes here"
          />
          <p className={style.serviceCardInfo}>{item.Name}</p>
        </Link>
      ))}
    </>
  );
}
