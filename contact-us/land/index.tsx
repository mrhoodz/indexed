import React from "react";
import style from "./style.module.scss";

export default function Land({}) {
  return (
    <article className={style.article} id="article">
      <div className={style.overlay}>ve</div>

      <div className={style.content}>
      <h1>
          Meerkat Plaza no 1, <br />
          28 Asbes Street, <br />
          Kathu{" "}
        </h1>

        <h3 className={style.h3}>
         sales@5staregineering.co.za
        </h3>
        <h3 className={style.h3}>
        info@5staregineering.co.za
        </h3>
        <h3 className={style.h3}>
        053 753 1404
        </h3>
      </div>
    </article>
  );
}
