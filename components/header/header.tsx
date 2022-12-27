import Image from "next/image";
import React from "react";
import style from "./style.module.scss";

import logohead from "../../public/resized/svg/logo png.svg";
import logotext from "../../public/resized/svg/logo text.svg";
import Navlinks from "./navlink";

export default function Header() {
  interface navProps {
    Link: string;
    href: string;
  }

  // const navLinks = ["home", "about-us", "services", "contact us"];
  const navLinks: navProps[] = [
    {
      Link: "HOME",
      href: "/",
    },

    {
      Link: "ABOUT US",
      href: "/about-us",
    },

    {
      Link: "SERVICES",
      href: "/#our-services",
    },

    {
      Link: "CONTACT US",
      href: "/contact-us",
    },
  ];

  return (
    <nav className={style.header}>
      <span className={style.logoWrapper}>
        <Image src={logohead} alt="this is alt text" />
        <Image src={logotext} alt="this is alt text" />
      </span>

      <Navlinks links={navLinks} />

      <a className={style.button} href="">
        GET A QUOTES
      </a>
    </nav>
  );
}
