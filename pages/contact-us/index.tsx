// import { Index } from './index';
import Head from "next/head";
import React from "react";
import Land from "../../contact-us/land";
import About from "../../contact-us/about";
import Services from "../../contact-us/services";
import Founded from "../../contact-us/founded";
import Vision from "../../contact-us/vision";
import { GraphQLClient, gql } from "graphql-request";
// import Services from "./services";

export default function index({ data }: any) {
  const theName: any = (datad: any) => {
    const x = data.theNameAll;
    let list: any[] = [];
    // let y = await x.map((item: any) => (  console.log(item.attributes.Name)  ))

    let y = x.map((i: any, index: any) => {
      index < 7 ? list.push(i.attributes) : null;
    });

    // console.log(y)
    return list;
  };

  return (
    <>
      <Head>
        <title>About Us</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Land />

      <About />
      <Services data={theName()} />

      <Founded />
      <Vision />
      {/* <article id="OurTeam">
        <p>
          We have a full complement of professionals with the right credentials
          to fully support and serve our clients.
        </p>

        <aside id="team-area">
          <div>
            image goes here
            <div>
              <h3>C.E.O / Founder</h3>
              <h4>MR LOT MUCAVELE</h4>
            </div>
          </div>
        </aside>
      </article> */}
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
