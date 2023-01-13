import ServiceCards from "./servicecards";
import React from "react";
import style from "./style.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";


export default function Services({ data }: any) {
  interface serviceCardsProps {
    id: number;
    p: string;
    image: string;
  }

  const shootAll = data.theNameAll;

  // console.log(shootAll)

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
  //   {
  //     id: 4,
  //     p: "Road Construction",
  //     image: "pexels-pixabay-259984 (Large).jpg",
  //   },
  //   {
  //     id: 5,
  //     p: "HVAC Services",
  //     image: "pexels-tamil-vanan-4966809 (Large).jpg",
  //   },
  //   {
  //     id: 6,
  //     p: "Workshop Equipment Supply",
  //     image: "pexels-tranmautritam-448828 (Large).jpg",
  //   },
  //   {
  //     id: 7,
  //     p: "Agricultural Engineering",
  //     image: "pexels-kateryna-babaieva-2760241 (Large).jpg",
  //   },
  //   {
  //     id: 8,
  //     p: "Electrical Engineering",
  //     image: "pexels-markus-spiske-93108 (Large).jpg",
  //   },
  //   {
  //     id: 9,
  //     p: "Renewable Energy",
  //     image: "pexels-anamul-rezwan-1145434 (Large).jpg",
  //   },
  //   {
  //     id: 10,
  //     p: "PAC Housing",
  //     image: "pexels-gerber-cana-2404942 (Large).jpg",
  //   },
  // ];

  const serviceCards: serviceCardsProps[] = shootAll;

  return (
    // <article className={style.ourservices} id="our-services">
    <article className={style.ourservices} id="our-services">
      <div className={style.infoWrapper}>
        <h2>OUR SERVICES</h2>
        <Link className="buttoned" href="/contact-us">
          CONTACT US
        </Link>
      </div>

      <p className={`${style.pcontent} p-small`}>
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
