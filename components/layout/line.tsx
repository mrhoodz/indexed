import React, { useEffect } from "react";
import style from "./line.module.scss";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

export default function line() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      {/* <div className={style.line}>line</div> */}
      <motion.div style={{ scaleX: scrollYProgress }} className={style.line}>
        line
      </motion.div>
    </>
  );
}
