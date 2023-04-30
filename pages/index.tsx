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
  // const endpoint = "https://sea-lion-app-ggqop.ondigitalocean.app/graphql";

  // const graphQLClient = new GraphQLClient(endpoint);

  const variables = {
    slug: "barricades",
  };
  // const queryAll = gql`
  //   query {
  //     services {
  //       data {
  //         attributes {
  //           Name
  //           slug
  //           Images {
  //             __typename
  //             ... on UploadFileRelationResponseCollection {
  //               data {
  //                 attributes {
  //                   url
  //                 }
  //               }
  //             }
  //           }

  //           Task {
  //             Task
  //           }
  //         }
  //       }
  //     }
  //   }
  // `;

  // const dataAll = await graphQLClient.request(queryAll);

  // const attributesAll = dataAll.services.data;

  const datad = {
    theNameAll: [
      {
        attributes: {
          Name: "Agricultural Engineering",
          slug: "agricultural-engineering",
          Images: {
            __typename: "UploadFileRelationResponseCollection",
            data: [
              { attributes: { url: "/uploads/IMG_7612_copy_69dd86bffd.webp" } },
              { attributes: { url: "/uploads/IMG_7645_copy_d278c8af73.webp" } },
              { attributes: { url: "/uploads/IMG_7643_copy_96ad20b326.webp" } },
              { attributes: { url: "/uploads/IMG_7637_copy_e46efb945f.webp" } },
              { attributes: { url: "/uploads/IMG_7648_copy_3e61b37f00.webp" } },
            ],
          },
          Task: [
            {
              Task: "Design and development of farm machinery and equipment, such as tractors, combines, and irrigation systems.",
            },
            {
              Task: "Design and construction of hydroponic greenhouses for the production of fruits using nutrient-rich water ",
            },
            {
              Task: "Development of renewable energy technologies  such as biogas systems and solar-powered irrigation pumps",
            },
            {
              Task: "Environmental impact assessments and design of sustainable agricultural practices",
            },
          ],
        },
      },
      {
        attributes: {
          Name: "Piping Services",
          slug: "piping-services",
          Images: {
            __typename: "UploadFileRelationResponseCollection",
            data: [
              { attributes: { url: "/uploads/43_a3ad7e23b8.webp" } },
              { attributes: { url: "/uploads/40_7be24fd47d.webp" } },
              { attributes: { url: "/uploads/41_9c0c158a36.webp" } },
              { attributes: { url: "/uploads/42_65acd78bd5.webp" } },
            ],
          },
          Task: [
            {
              Task: "Fabrication and installation of walkways and barricades.",
            },
            {
              Task: "Installing temporary fencing to create barriers or enclosures for construction sites.",
            },
            {
              Task: "Developing crowd control barriers to manage crowds and traffic flow.",
            },
            {
              Task: "Maintenance to ensure that barricades are in good condition and functioning properly.",
            },
          ],
        },
      },
      {
        attributes: {
          Name: "Electrical Engineering",
          slug: "electrical-engineering",
          Images: {
            __typename: "UploadFileRelationResponseCollection",
            data: [
              { attributes: { url: "/uploads/26_97f7b051c2.webp" } },
              { attributes: { url: "/uploads/1_c2e9171a53.webp" } },
              { attributes: { url: "/uploads/4_ccd4cf7d8f.webp" } },
              { attributes: { url: "/uploads/3_46a8408d62.webp" } },
              { attributes: { url: "/uploads/2_adb62dc1f7.webp" } },
            ],
          },
          Task: [
            {
              Task: "Design and installation of electrical systems for buildings and infrastructure",
            },
            { Task: "Maintenance and repair of electrical systems" },
            {
              Task: "Testing and inspection of electrical systems for safety and compliance",
            },
            { Task: "Electrical safety assessments and consulting" },
          ],
        },
      },
      {
        attributes: {
          Name: "HVAC Services",
          slug: "hvac-services",
          Images: {
            __typename: "UploadFileRelationResponseCollection",
            data: [
              {
                attributes: {
                  url: "/uploads/vecteezy_industry_engineer_under_checking_the_industry_cooling_tower_6668324_521_1b5ce0f68a.webp",
                },
              },
              { attributes: { url: "/uploads/4348252_1d1e17865c.webp" } },
              {
                attributes: {
                  url: "/uploads/l_Rh_Iu_Z2_G_1537285736_eb4492d682.webp",
                },
              },
            ],
          },
          Task: [
            {
              Task: "Installation and maintenance of HVAC systems, air conditioners, and heat pumps",
            },
            { Task: "Repair and troubleshooting of HVAC systems" },
            {
              Task: "Inspection and cleaning of HVAC systems to ensure they are operating efficiently",
            },
            { Task: "Energy-efficient upgrades to existing HVAC systems" },
          ],
        },
      },
      {
        attributes: {
          Name: "Mechanical and Civil Engineering",
          slug: "mechanical-and-civil-engineering",
          Images: {
            __typename: "UploadFileRelationResponseCollection",
            data: [
              { attributes: { url: "/uploads/IMG_5890_copy_ea15703860.webp" } },
              { attributes: { url: "/uploads/IMG_7632_copy_f3832248e1.webp" } },
              { attributes: { url: "/uploads/IMG_5882_copy_4538c7fee3.webp" } },
              { attributes: { url: "/uploads/IMG_7667_copy_e66f7550de.webp" } },
              { attributes: { url: "/uploads/IMG_5889_copy_1d8db2e136.webp" } },
            ],
          },
          Task: [
            {
              Task: "Fabrication and assembly of mechanical components and systems.",
            },
            { Task: "Construction management for civil engineering projects." },
            {
              Task: "Environmental engineering, including water and waste management systems.",
            },
            {
              Task: "Structural engineering, including design and analysis of buildings and other structures.",
            },
          ],
        },
      },
      {
        attributes: {
          Name: "Workshop Equipment Supply",
          slug: "workshop-equipment-supply",
          Images: {
            __typename: "UploadFileRelationResponseCollection",
            data: [
              { attributes: { url: "/uploads/image3_ca0f91fe2a.webp" } },
              {
                attributes: {
                  url: "/uploads/istockphoto_580108428_612x612_469dddc336.webp",
                },
              },
              {
                attributes: {
                  url: "/uploads/horizontal_belt_conveyor_1_1_dafc9aafce.webp",
                },
              },
              {
                attributes: {
                  url: "/uploads/istockphoto_1211335117_612x612_10577a818e.webp",
                },
              },
              {
                attributes: {
                  url: "/uploads/istockphoto_159758712_612x612_f12828cd31.webp",
                },
              },
              {
                attributes: {
                  url: "/uploads/1547700765_Belt_co_6059ac9998.webp",
                },
              },
            ],
          },
          Task: [
            { Task: "Maintenance and repair of workshop equipment" },
            { Task: "Custom fabrication of workshop equipment and tools" },
            {
              Task: "Consultation and advice on workshop equipment and tool selection",
            },
            {
              Task: "Safety inspections and hazard assessments for workshop equipment",
            },
          ],
        },
      },
      {
        attributes: {
          Name: "Road Construction",
          slug: "road-construction",
          Images: {
            __typename: "UploadFileRelationResponseCollection",
            data: [
              { attributes: { url: "/uploads/IMG_6311_copy_7c04f5f592.webp" } },
              { attributes: { url: "/uploads/IMG_6167_copy_5b070ec1ef.webp" } },
              { attributes: { url: "/uploads/IMG_6576_copy_99c1cf5b18.webp" } },
              { attributes: { url: "/uploads/IMG_6660_copy_645e8fb215.webp" } },
              { attributes: { url: "/uploads/DSC_0645_copy_4d262dad27.webp" } },
              { attributes: { url: "/uploads/IMG_6503_copy_506b6da3ce.webp" } },
            ],
          },
          Task: [
            {
              Task: "Geotechnical engineering for road construction projects.",
            },
            { Task: "Pavement removal and replacement." },
            { Task: "Roadside landscaping and beautification." },
            { Task: "Road maintenance and repair" },
          ],
        },
      },
      {
        attributes: {
          Name: "Renewable Energy",
          slug: "renewable-energy",
          Images: {
            __typename: "UploadFileRelationResponseCollection",
            data: [
              { attributes: { url: "/uploads/7_e3153662ce.webp" } },
              { attributes: { url: "/uploads/8_8f861701e2.webp" } },
              { attributes: { url: "/uploads/9_771456b295.webp" } },
              { attributes: { url: "/uploads/10_2844a0e0d9.webp" } },
              { attributes: { url: "/uploads/13_628a3d61d8.webp" } },
              { attributes: { url: "/uploads/12_7668652d59.webp" } },
            ],
          },
          Task: [
            {
              Task: "Solar energy design and installation of solar panel systems for residential, commercial, and industrial use",
            },
            {
              Task: "Biomass energy construction of facilities for the conversion of organic materials into energy, such as biofuel production plants",
            },
            {
              Task: "Assessment of energy use in buildings and development of strategies to reduce energy consumption and increase the use of renewable energy",
            },
            {
              Task: "Design and installation of systems for storing excess renewable energy, such as battery storage systems",
            },
          ],
        },
      },
      {
        attributes: {
          Name: "Barricades",
          slug: "barricades",
          Images: {
            __typename: "UploadFileRelationResponseCollection",
            data: [
              {
                attributes: {
                  url: "/uploads/Company_Profile1_10_e79e31a511.webp",
                },
              },
              {
                attributes: {
                  url: "/uploads/Company_Profile1_11_d0b9f6618e.webp",
                },
              },
              {
                attributes: {
                  url: "/uploads/Company_Profile1_9_8e67086d39.webp",
                },
              },
              { attributes: { url: "/uploads/Structures_645bab97b4.webp" } },
              {
                attributes: {
                  url: "/uploads/Company_Profile1_8_943f418dc1.webp",
                },
              },
            ],
          },
          Task: [
            {
              Task: "Design and production of barriers and barricades for a variety of applications",
            },
            {
              Task: "Installation of barriers and barricades at various locations, including construction sites and public events",
            },
            {
              Task: "Construction of walkways for pedestrian traffic, including elevated walkways, bridge walkways, and other types of pedestrian infrastructure.",
            },
            {
              Task: "Consulting services over the design and construction of barriers and walkways",
            },
          ],
        },
      },
      {
        attributes: {
          Name: "PAC Housing",
          slug: "pac-housing",
          Images: {
            __typename: "UploadFileRelationResponseCollection",
            data: [
              {
                attributes: {
                  url: "/uploads/Company_Profile1_21_6a9c380b42.webp",
                },
              },
              {
                attributes: {
                  url: "/uploads/Company_Profile1_27_065e9473c6.webp",
                },
              },
              {
                attributes: {
                  url: "/uploads/Company_Profile1_20_e7136c940a.webp",
                },
              },
              { attributes: { url: "/uploads/pac_service_1_52d04a1d11.webp" } },
            ],
          },
          Task: [{ Task: null }],
        },
      },
    ],
  };

  // console.log(datad);
  return {
    props: {
      data: datad,
    },
  };
}
