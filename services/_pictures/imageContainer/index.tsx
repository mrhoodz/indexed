import React from "react";
import ImageItem from "./imageItem";
import style from "./style.module.scss";

export default function ImageContainer({data}: any) {
  interface imageDataProps {
    id: number;
    src: string;
  }

const shoot = data[0].attributes.Images.data

// console.log(shoot)

  // const Imagedata: imageDataProps[] = [
  //   {
  //     id: 1,
  //     src: "pexels-yury-kim-585418 (Large).jpg",
  //   },

  //   {
  //     id: 2,
  //     src: "pexels-yury-kim-585418 (Large).jpg",
  //   },
  //   {
  //     id: 3,
  //     src: "pexels-yury-kim-585418 (Large).jpg",
  //   },
  //   {
  //     id: 4,
  //     src: "pexels-yury-kim-585418 (Large).jpg",
  //   },
  // ];

  // const Imagedata = shoot;


  return (
    <div className={style.imageContainer}>
      <ImageItem data={shoot} />
    </div>
  );
}
