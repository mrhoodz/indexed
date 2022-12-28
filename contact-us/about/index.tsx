import React from "react";
import style from "./style.module.scss";
import Valuecards from "./valueCards";
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
    <article className={style.article} id="about">
      <div id="values">
        <Valuecards data={data} />
      </div>

      <div className="hero" id="img">
        <Image
          height={1080}
          width={1920}
          className="heroimg"
          src="/resized/pexels-kateryna-babaieva-2760241 (Large).jpg"
          alt="hero image"
        />
      </div>
      <p className={`p-small ${style.p} `}>
        Established in 2019 by Mr Lot Mucavele who has over 10 years experience
        in engineering and project management fields. We service our clients
        with the highest quality of workmanship. Our passion is to deliver value
        to our clients by offering affordable high quality engineering. Skills
        and a superior customer experience. We care about our team members and
        suppliers with respect, while recognizing the significance of diversity.
      </p>
    </article>
  );
}
