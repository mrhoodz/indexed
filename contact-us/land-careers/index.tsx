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
          Our goal is to be a trusted partner for all of your engineering needs{" "}
        </h3>
      </div>
    </article>
  );
}
