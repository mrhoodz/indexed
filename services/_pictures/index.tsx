import React from "react";
import style from "./style.module.scss";
import  ImageContainer  from "./imageContainer";
import Sidebar  from "./sidebar";

export default function Pictures({data , dataAll}: any) {
  interface sideProps {
    id: number;
    link: string;
  }

  const sideLinkProps: sideProps[] = [
    {
      id: 1,
      link: "Mechanical and Civil Constrution",
    },

    {
      id: 2,
      link: "Water Treatment",
    },

    {
      id: 3,
      link: "Road Construction",
    },
  ];



    // const sideLinkProps: sideProps[] = data[0].attributes.Images.data;

// console.log(sideLinkProps)

  return (
    <article className={style.article} id="pictures">
      <ImageContainer data={data} />

      <Sidebar data={data} dataAll={dataAll} />
    </article>
  );
}
