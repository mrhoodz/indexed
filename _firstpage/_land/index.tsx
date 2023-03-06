import React, { useState } from "react";
import style from "./style.module.scss";
// import Tasks from "./tasks";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

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

  //change state after 2 seconds

  const [h3, setH3] = useState("Mechanical and Civil Constuction");

  // setInterval(() => {
  //   setH3("Agricultural Engineering");
  // }, 2000);

  // setTimeOut(() => {
  //   setH3("Road Construction");
  // }, 4000);

  // setInterval(() => {
  //   setH3("Road Construction");
  // }, 4000);

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
          {h3}
        </motion.h1>
        <motion.h3
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          className={style.h3}
        >
          {" "}
          5 star engineering solutions was established in 2019 by Mr Lot
          Mucavele who has over 10 years experience in engineering and project
          management fields. We service our clients with the highest quality of
          workmanship.
        </motion.h3>

        <div className={style.buttonzone}>
          <Link
            className="buttoned"
            href={"/services/mechanical-and-civil-engineering"}
          >
            READ MORE
          </Link>

          <a
            href="/resized/5StarCompanyProfile.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={style.round}
          >
            +
          </a>
        </div>

        {/* <Tasks data={tasksData} /> */}
      </div>

      <motion.div
        initial={{ x: 400 }}
        whileInView={{ x: 0 }}
        className={style.services}
      >
        <span>
          <Link href={"/services/mechanical-and-civil-engineering"}>
            <Image fill src="/resized/_DSC2758 (2).JPG" alt="image goes here" />{" "}
            <p>Mechanical Engineering</p>{" "}
          </Link>
        </span>
        <span>
          <Link href={"/services/agricultural-engineering"}>
            <Image fill src="/resized/3.jpg" alt="image goes here" />{" "}
            <p>Agricultural Engineering</p>{" "}
          </Link>
        </span>
        <span>
          <Link href={"/services/road-construction"}>
            <Image fill src="/resized/2.jpg" alt="image goes here" />{" "}
            <p>Road Construction </p>{" "}
          </Link>
        </span>
      </motion.div>
    </article>
  );
}
