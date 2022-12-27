import React from "react";
import style from "./style.module.scss";
import LinksArea from "./linksArea";

export default function Sidebar({ dataAll }: any) {
  // console.log(data)
  return (
    <aside className={style.sidebar}>
      <h4 className={style.h4}>Our Other Services</h4>

      <LinksArea dataAll={dataAll} />
    </aside>
  );
}
