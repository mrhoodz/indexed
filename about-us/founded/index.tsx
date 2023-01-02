import React from "react";
import style from "./style.module.scss";
import Image from "next/image";

export default function Founded({}) {
  return (
    <article className={style.article} id="founded">
      {/* assd */}
      <span className="header">
        <h2>FOUNDED IN PASSION</h2>
        <a className="buttoned" href="">
          OUR SERVICES
        </a>
      </span>
      {/* <p className={`${style.p}  p-small`}>
        Established in 2019 by Mr Lot Mucavele who has over 10 years experience
        in engineering and project management fields. We service our clients
        with the highest quality of workmanship. Our passion is to deliver value
        to our clients by offering affordable high quality engineering. Skills
        and a superior customer experience. We care about our team members and
        suppliers with respect, while recognizing the significance of diversity.
      </p> */}
      <p className={`${style.p}  p-small`}>
        At 5 Star Engineering Solutions, we were founded on a passion for
        engineering and a desire to make a difference in the world. From day
        one, we have been driven by a commitment to excellence and a desire to
        exceed our customers&apos; expectations. Our team is made up of highly
        skilled professionals who are passionate about their work and dedicated
        to delivering top-quality results.
      </p>
      <div className={`hero-bigger ${style.bigger}`} id="img">
        <Image
        width={1920}
        height={1080}
          className={"heroimg"}
          src="/resized/pexels-kateryna-babaieva-2760241 (Large).jpg"
          alt="hero image"
        />
      </div>{" "}
    </article>
  );
}
