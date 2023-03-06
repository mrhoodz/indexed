import Head from "next/head";
// import Image from "next/image";
// import { Inter } from "@next/font/google";
// import styles from "./style.module.scss";
import Prime from "../_firstpage";
// const inter = Inter({ subsets: ["latin"] });
// import axios from "axios";
import { GraphQLClient, gql } from "graphql-request";
// import { GraphQLClient, gql } from "graphql-request";

export default function Home({ data }: any) {
  // console.log(data.theNameAll);
  return (
    <>
      <Head>
        <title>Home page</title>
        <meta
          name="description"
          content="Welcome to 5star egineering solutions"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Prime data={data} />
    </>
  );
}

export async function getServerSideProps(context: any) {
  const endpoint = "https://sea-lion-app-ggqop.ondigitalocean.app/graphql";

  const graphQLClient = new GraphQLClient(endpoint);

  const variables = {
    slug: "barricades",
  };
  const queryAll = gql`
    query {
      services {
        data {
          attributes {
            Name
            slug
            Images {
              __typename
              ... on UploadFileRelationResponseCollection {
                data {
                  attributes {
                    url
                  }
                }
              }
            }

            Task {
              Task
            }
          }
        }
      }
    }
  `;

  const dataAll = await graphQLClient.request(queryAll);

  const attributesAll = dataAll.services.data;

  const datad = {
    theNameAll: attributesAll,
  };

  // console.log(datad);
  return {
    props: {
      data: datad,
    },
  };
}
