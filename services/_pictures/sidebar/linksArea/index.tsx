import React from "react";
import style from "./style.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

export default function LinksArea({ dataAll }: any) {
  interface sideProps {
    id: number;
    link: string;
  }

  const router = useRouter();
  const { slug } = router.query;
  // console.log(slug);
  // console.log(slug);

  function activateValidator(link: any) {
    if (link === slug) {
      return style.active;
    } else {
      return style.a;
    }
  }

  // console.log(dataAll[0].attributes.Name)

  return (
    <div className={style.linksContainer}>
      {dataAll.map((item: any) => (
        <Link
          className={activateValidator(item.attributes.slug)}
          key={Math.random()}
          href={`${item.attributes.slug}`}
        >
          {item.attributes.Name}
        </Link>
      ))}
    </div>
  );
}
