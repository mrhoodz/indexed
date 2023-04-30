import React from "react";
import style from "./style.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ImageItem({ data }: any) {
  interface imageDataProps {
    id: number;
    src: string;
  }

  console.log(data);

  return (
    <>
      {data.map((item: any, index: any) => (
        <motion.div
          initial={{ scale: 0.7 }}
          whileHover={{ scale: 1.05 }}
          whileInView={{ scale: 1 }}
          key={index}
        >
          <Image
            height={1080}
            width={1920}
            className={style.img}
            src={`${item.attributes.url}`}
            alt="image goes here"
          />
        </motion.div>
      ))}
    </>
  );
}
