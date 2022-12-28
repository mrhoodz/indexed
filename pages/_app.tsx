import "../styles/globals.css";
import "../styles/global.scss";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
        <Analytics mode={"production"} />
      </Layout>
    </>
  );
}
