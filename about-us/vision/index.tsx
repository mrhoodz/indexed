import React from "react";
import style from "./style.module.scss";
import Image from "next/image";

export default function Vision({}) {
  return (
    <article className={style.article} id="mission-vision">
      <aside className={style.aside} id="mission-statement">
        <h2>OUR MISSION</h2>

        <p className="p-small">
          Our mission is to deliver personalized customer attention and
          efficiency while providing top-quality engineering services. We are
          committed to excellence in everything we do and strive to exceed our
          customers&apos; expectations.
        </p>

        <div className={`hero ${style.img}`} id="img">
          <Image
            width={1920}
            height={1080}
            className={` ${style.heroimg}`}
            src="/resized/pexels-anamul-rezwan-1145434 (Large).jpg"
            alt="hero image"
          />
        </div>
      </aside>

      <aside className={style.aside} id="mission-statement">
        <h2>OUR VISION</h2>

        <p className="p-small">
          We believe that the sustainable growth of our business is directly
          linked to our involvement in local community upliftment and
          empowerment programs, as well as environmentally friendly initiatives.
          We are dedicated to making a positive impact in the world through our
          work.
        </p>

        <div className={`hero ${style.img}`} id="img">
          <Image
            width={1920}
            height={1080}
            className={` ${style.heroimg}`}
            src="/resized/2.jpg"
            alt="hero image"
          />
        </div>
      </aside>
    </article>
  );
}
