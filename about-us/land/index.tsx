import React from "react";
import style from "./style.module.scss";
import { motion } from "framer-motion";

export default function Land({}) {
  return (
    <article className={style.article} id="article">
      <div className={style.overlay}>ve</div>

      <div className={style.content}>
        <motion.h1  initial={{scale:1.2}}  whileInView={{scale:1}} >
          We are committed to providing our customers with the very best
          engineering services{" "}
        </motion.h1>

        <h3 className={style.h3}>
          Our goal is to be a trusted partner for all of your engineering needs{" "}
        </h3>
      </div>
    </article>
  );
}
