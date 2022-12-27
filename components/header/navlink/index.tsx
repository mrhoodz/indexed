import React from "react";
import style from "./style.module.scss"
import Link from "next/link";

interface navProps {
  Link: string;
  href: string;
}
export default function Navlinks({ links }: any) {
  return (
    <>


    <span className={style.span}>
      {links.map((item : navProps ) => (
        <Link key={Math.random()} href={item.href}>{item.Link}</Link>
      ))}


</span>
    </>
  );
}
