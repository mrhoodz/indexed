import React from "react";
import style from "./style.module.scss";
import ServiceCards from "./servicecards";
// import { fetcher } from "../../../lib/api";

export default function Services({ data }: any) {
  interface serviceCardsProps {
    id: number;
    p: string;
    image: string;
  }

  // const serviceCards: serviceCardsProps[] = [
  //   {
  //     id: 1,
  //     p: "Mechanical and Civil Construction",
  //     image: "pexels-anamul-rezwan-1216589 (Large).jpg",
  //   },
  //   {
  //     id: 2,
  //     p: "Water Treatment",
  //     image: "pexels-yury-kim-585418 (Large).jpg",
  //   },
  //   {
  //     id: 3,
  //     p: "Supply, Services, Repair and Installation of Workshop Machines",
  //     // p: " Workshop Machine Supplyand maintanance",
  //     image: "pexels-pixabay-7931 (Large).jpg",
  //   },
  // ];

  const serviceCards = data;

  return (
    <article className={style.article} id="our-services">
      <span className="header">
        <h2>OUR SERVICES</h2>
        <a className="buttoned" href="">
          CONTACT US
        </a>
      </span>

      <p className={`${style.p} p-small`}>
        We have a passion for delivering value to our clients through offering
        affordable high quality engineering skills and superior client
        experience.
      </p>

      <aside className={style.servicesArea}>
        <ServiceCards data={serviceCards} />
      </aside>
    </article>
  );
}
