import React from "react";
import style from "./style.module.scss";
import Image from "next/image";
// import "../styles/colors.scss";

export default function Vision({}) {
  return (
    <article className={style.article} id="mission-vision">
      <form className={style.form} id="mission-statement">
        <h2>CONTACT US</h2>
        <label>YOUR NAME</label>

        <input type="text" name="email.com" id="email" placeholder="Name" />

        <label>YOUR EMAIL</label>

        <input type="email" name="email.com" id="email" placeholder="Email" />
        <label>YOUR CV</label>

        <input type="file" name="email.com" id="email" placeholder="CV" />
        <div>
          <button className={style.button}>SUBMIT NOW</button>
          {/* <a className={` ${style.secondBTN}`}>CAREERS</a> */}
        </div>
      </form>

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
