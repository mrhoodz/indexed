import React from "react";
import style from "./style.module.scss";
import  Tasks from "./tasks";
import { motion } from "framer-motion";

export default function Land({ data }: any) {
  // console.log(data)
  interface taskProps {
    id: number;
    Task: string;
  }

  // const tasksData: taskProps[] = [
  //   {
  //     id: 1,
  //     task: "Steel fabrication and construction",
  //   },

  //   {
  //     id: 2,
  //     task: "Mechanical construction and pipes installation",
  //   },

  //   {
  //     id: 3,
  //     task: "Erection of steel structure - We do Steel welding, Stainless, Aluminum, Copper and plastic",
  //   },

  //   {
  //     id: 4,
  //     task: " We weld Structures, pipelines, tanks, pressure vessels and boilers",
  //   },
  // ];


  return (
    <article className={style.article} id="article">
      <div className={style.overlay}>ve</div>

      <div 
      // initial={{scale:0.9}} whileInView={{scale:1}}
       className={style.content}>
        {/* <h1 className={style.h1}>{data}</h1> */}
        <motion.h1
              initial={{scale:0.9}} whileInView={{scale:1}}

        className={style.h1}>Mechanical Engineering</motion.h1>
        <h3 className={style.h3}>We love food </h3>

        {/* <Tasks data={tasksData} /> */}
      </div>
    </article>
  );
}
