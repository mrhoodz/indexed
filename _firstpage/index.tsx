// import Vision from "../components/vision";
import Services from "./services";
import About from "./about";
// import Index from "./index";
import Land from "./land";
import React from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Care } from "./care/care";

export default function Prime({ data }: any) {
  const router = useRouter();
  const { slug } = router.query;

  // console.log(data)
  // console.log(data)

  return (
    <>
      <Land />
      <About />
      <Care />
      <Services data={data} />
    </>
  );
}
