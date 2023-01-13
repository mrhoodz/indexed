import React, { ReactNode } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import Vision from "../vision";
import style from "./layout.module.scss";
import Link from "next/link";
import Line from "./line";
import { useScroll, useMotionValueEvent, motion } from "framer-motion";

interface Props {
  children?: ReactNode;
}

export default function Layout({ children }: Props) {

  const { scrollY } = useScroll();
  const [retra, setRetra] = React.useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {



 

  if( latest > 800 ){

    setRetra(true)
    console.log("Page scroll: ", latest)

    return {y :-100}
  
  
  }
  else{
    setRetra(false)
    console.log("Page scroll: ", latest)

    return {y :-100}
  
  }
  




  })


  // tenary operator
  // const retra = latest > 800 ? true : false;
  

  return (
    <>
      <Line />

      <motion.header animate={{y: retra === true ? -60 : 0}}  className={style.header}>
        <address className={style.contactInfo}>
          <span className={style.locationAddress}>
            MEERKAT PLAZA NO 2, 28 ABSES STREET, KATHU
          </span>

          <span>
            <span id="info-email">info@5Starengineering.co.za</span>

            <span className={style.phoneNumber}>053-753-1404</span>
          </span>
        </address>

        <div className={style.navBar}>
          <span className={style.mainLogo}>
            <img src={"/logo png.svg"} alt="logo goes here" />
            <img src={"/logo text.svg"} alt="logo goes here" />
          </span>

          <nav>
            <Link className={style.link} href="/">
              HOME
            </Link>
            <Link className={style.link} href="/#services">
              SERVICES
            </Link>
            <Link className={style.link} href="/about-us">
              ABOUT US
            </Link>
            <Link className={style.link} href="contact-us/careers">
              CAREERS
            </Link>
          </nav>

          <Link className={style.getQuote} href="/contact-us">
            {" "}
            GET A QUOTE
          </Link>
        </div>
      </motion.header>

      <main>{children}</main>

      {/* <Vision /> */}
      <footer className={style.footer}>
        <aside className={style.vision}>
          <h1>"PROFIT, FOR A BETTER FUTURE"</h1>
          <p>Lot Mucavele / Director</p>
        </aside>

        <aside className={style.bottomNav}>
          <div className={style.company}>
            <h2>Company</h2>
            <Link className={style.Link} href={"/"}>
              HOME
            </Link>
            <Link className={style.Link} href={"/about-us"}>
              ABOUT US
            </Link>
            <Link className={style.Link} href={"/#services"}>
              SERVICES
            </Link>
            <Link className={style.Link} href={"/contact-us/careers"}>
              CAREERS
            </Link>
          </div>

          <div className={style.company}>
            <h2>Services</h2>
            <Link className={style.Link} href={"/"}>
              Mechanical and Civil Constrution
            </Link>
            <Link className={style.Link} href={"/"}>
              Renewable Energy
            </Link>
            <Link className={style.Link} href={"/"}>
              Agricultural Engineering
            </Link>
            <Link className={style.Link} href={"/"}>
              Workshop Equipment Supply
            </Link>
          </div>

          <div className={style.logoAddress}>
            <span className={style.mainLogo}>
              <img src={"/logo png.svg"} alt="logo goes here" />
              <img src={"/logo text.svg"} alt="logo goes here" />
            </span>

            <address className={style.contactInfo}>
              <span className={style.locationAddress}>
                MEERKAT PLAZA NO 2, 28 ABSES STREET, KATHU
              </span>

              <span id="info-email">info@5Starengineering.co.za</span>

              <span className={style.phoneNumber}>053-753-1404</span>
            </address>
          </div>
        </aside>

        <div className={style.outro}>
          <span>5 Star Engineering Solutions </span>

          <span>2023© </span>

          <span> Developed by: JuggleAfrica 071 9353 205</span>
        </div>
      </footer>
    </>
  );
}
