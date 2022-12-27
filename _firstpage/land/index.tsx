import React from "react";
import style from "./style.module.scss";

export default function Land({}) {
  return (
    <article className={style.article} id="article">
      <div className={style.overlay}>g</div>

      <div className={style.content}>
        <h1>
          We are a 100% black owned engineering company with a level 1 B-BBEE
        </h1>

        <h1>{/* <p>hey there</p> */}</h1>

        <h2>
          Dedicated to providing high quality engineering services, economic
          growth through job creation and the upliftment of disadvantaged
          communities.
        </h2>

        <a href="#our-services">OUR SERVICES</a>

        <div className={style.contactinfo}>
          <span>Info@5starengineering.co.za</span>
          <span>1-800-858-9999</span>
        </div>
      </div>
    </article>
  );
}
