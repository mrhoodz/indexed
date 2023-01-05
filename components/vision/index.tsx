import React from "react";
import style from "./style.module.scss";
import Image from "next/image";

export default function Vision({}) {
  return (
    <article className={style.vision} id="vision">
      <Image
      fill

        className={style.img}
        src="/resized/pexels-pixabay-259984 (Large).jpg"
        alt="vision image goes here"
      />

      <div className={style.overlay}>over</div>

      <h2 className={style.h2}>&apos;PROFIT, FOR A BETTER FUTURE&apos;</h2>
      <p className={style.p}>Lot Mucavele/ Director</p>
    </article>
  );
}
