import React from "react";
import style from "./style.module.scss";

export default function Tasks({ data }: any) {
  // console.log(data)
  interface taskProps {
    id: number;
    Task: string;
  }

  return (
    <>
      {data.map((item: taskProps) => (
        <h3 className={style.h3} key={Math.random()}>
          {item.Task}
        </h3>
      ))}
    </>
  );
}
