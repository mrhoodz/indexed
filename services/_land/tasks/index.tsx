import React from "react";
import style from "./style.module.scss";
import { motion } from "framer-motion";

export default function Tasks({ data }: any) {
  // console.log(data)
  interface taskProps {
    id: number;
    Task: string;
    variants: any;
  }

  const list = { hidden: { opacity: 0 } };
  const thing = {
    hidden: {
      x: -160,
      opacity: 0.2,
      transition: {
        delayChildren: 3,
        duration: 1,
        // delay: 0.3,
        staggerChildren: 0.3,
      },
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        // delay: 0.3,
        delayChildren: 3,
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <>
      {data.map((item: any) => (
        <motion.h3
          variants={thing}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1 }}
          className={style.h3}
          key={Math.random()}
        >
          {item.Task}
        </motion.h3>
      ))}
    </>
  );
}
