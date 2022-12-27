import React, { ReactNode } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import Vision from "../vision";

interface Props {
  children?: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />

      <main>{children}</main>

      <Vision />
      <Footer />
    </>
  );
}
