import Valuecards from "./valueCards";
import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";

export default function About({}) {
  interface valueProps {
    id: number;
    h3: string;
    p: string;
    icon: string;
  }

  // const data: valueProps[] = [
  const data: valueProps[] = [
    {
      id: 1,
      h3: "We promise",
      p: "RESPECT",
      icon: "handshake.svg",
    },
    {
      id: 2,
      h3: "We prioritize",
      p: "INTERGRITY",
      icon: "shield.svg",
    },
    {
      id: 3,
      h3: "We value",
      p: "DISVERSITY",
      icon: "target.svg",
    },
  ];

  return (
    <article className={styles.about} id="about">
      <h2 className={styles.h2}>
        We are committed to providing our customers with the very best
        engineering services
      </h2>

      {/* <h2>
       </h2> */}

      <p className={styles.p}>
        Established in 2019 by Mr Lot Mucavele who has over 10 years experience
        in engineering and project management fields. We service our clients
        with the highest quality of workmanship. Our passion is to deliver value
        to our clients by offering affordable high quality engineering. Skills
        and a superior customer experience. We care about our team members and
        suppliers with respect, while recognizing the significance of diversity.
      </p>

      {/* <Valuecards data={data} /> */}

      <div className={styles.hero} id="img">
        <Image
          className={styles.heroimg}
          height={1080}
          width={1620}
          src="/resized/pexels-tranmautritam-448828 (Large).jpg"
          alt="hero image"
        />
      </div>
    </article>
  );
}
