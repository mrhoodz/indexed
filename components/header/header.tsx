import Image from "next/image";
import React from "react";
import style from "./style.module.scss";

import logohead from "../../public/resized/svg/logo png.svg";
import logotext from "../../public/resized/svg/logo text.svg";
import Navlinks from "./navlink";
import Link from "next/link";

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
      href: "/",
    },
  ];

  return (
    <nav className={style.header}>
      <Link href="\" className={style.logoWrapper}>
        <Image className={style.logohead} src={logohead} alt="this is alt text" />
        <Image className={style.logotext} src={logotext} alt="this is alt text" />
      </Link>

      <Navlinks links={navLinks} />

      <a className={style.button} href="">
        GET A QUOTES
      </a>
    </nav>
  );
}
