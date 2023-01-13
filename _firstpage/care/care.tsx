import React from "react";
import style from "./style.module.scss";
import crypto from "crypto";

export function Care({}) {
  interface valueProps {
    value?: string;
    icon?: string;
  }

  const values: valueProps[] = [
    {
      icon: "/handshake.svg",
      value: "We promise RESPECT",
    },

    {
      icon: "/shield.svg",
      value: "We prioritize INTERGRITY",
    },

    {
      icon: "/target.svg",
      value: "We value DIVERSITY",
    },
  ];

  return (
    <article className={style.weCare}>
      <aside className={style.sideImg}>
        <img src="/resized/_DSC2758 (2).JPG" alt="image goes here" />
      </aside>

      <aside className={style.sideContent}>
        <h2>WE CARE ABOUT OUR TEAM MEMBERS AND PARTNERS</h2>

        <div>
          {values.map((item) => (
            <span key={Math.random()}>
              <h3>{item.value}</h3>
              <img
                className={style.img}
                src={item.icon}
                alt="img goes here"
              />{" "}
            </span>
          ))}
        </div>
      </aside>
    </article>
  );
}
