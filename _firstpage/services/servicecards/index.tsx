import React from "react";
import style from "./style.module.scss";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface serviceCardsProps {
  id: number;
  p: string;
  image: string;
}

export default function ServiceCards({ data }: any) {
  // src={`http://localhost:1337${item.attributes.Images.data[ item.attributes.Images.data.length-1  ].attributes.url}`}

  const x = data[0].attributes.Images.data;
  // console.log(x.length - 1);
  return (
    <>
      {data.map((item: any) => (
        <>
          <Link key={Math.random()} href={`services/${item.attributes.slug}`}>
            {" "}
            <motion.div
              initial={{ scale: 0.3 }}
              whileInView={{ scale: 1 }}
              key={Math.random()}
              className={style.serviceCard}
            >
              <Image
                height={1080}
                width={1920}
                className={style.serviceCardImage}
                src={`https://sea-lion-app-ggqop.ondigitalocean.app${item.attributes.Images.data[0].attributes.url}`}
                alt="services image goes here"
              />

              <p className={style.serviceCardInfo}>{item.attributes.Name}</p>
            </motion.div>
          </Link>
        </>
      ))}
    </>
  );
}
