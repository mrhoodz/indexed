import React from "react";
import style from "./style.module.scss";
import Tasks from "./tasks";
import { motion } from "framer-motion";
import Link from "next/link";

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
        className={style.content}
      >
        {/* <h1 className={style.h1}>{data}</h1> */}
        <motion.h1
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          className={style.h1}
        >
          Mechanical and Civil Constuction{" "}
        </motion.h1>
        <motion.h3
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          className={style.h3}
        >
          {" "}
          5 star engineering solutions was established in 2019 by Mr Lot
          Mucavele who has over 10 years experience in engineering and project
          management fields. We service our clients with the highest .
        </motion.h3>


        <div className={style.buttonzone}>

        <Link className="buttoned" href="/contact-us">
          READ MORE
        </Link>


        <div className={style.round}>
          +
        </div>
        
        </div>

        {/* <Tasks data={tasksData} /> */}
      </div>

      <motion.div
        initial={{ x: 400 }}
        whileInView={{ x: 0 }}
        className={style.services}
      >
        <span>
          <img src="/resized/_DSC2758 (2).JPG" alt="image goes here" />{" "}
          <p>Mechanical Engineering</p>{" "}
        </span>
        <span>
          <img src="/resized/_DSC2758 (2).JPG" alt="image goes here" />{" "}
          <p>Agricultural Engineering</p>{" "}
        </span>
        <span>
          <img src="/resized/_DSC2758 (2).JPG" alt="image goes here" />{" "}
          <p>Road Construction </p>{" "}
        </span>
      </motion.div>
    </article>
  );
}
