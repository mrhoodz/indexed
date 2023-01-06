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

        <input type="email" name="email.com" id="email" placeholder="Name" />

        <label>YOUR EMAIL</label>

        <input type="email" name="email.com" id="email" placeholder="Email" />
        <label>ASK US ANYTHING</label>

        <textarea id="email" placeholder="Your Message"></textarea>

        <div>
          <a className={style.button}>SUBMIT NOW</a>
          <button className={` ${style.secondBTN}`}>CAREERS</button>
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
            src="/resized/pexels-pixabay-259984 (Large).jpg"
            alt="hero image"
          />
        </div>
      </aside>
    </article>
  );
}
