import { GraphQLClient, gql } from "graphql-request";

export default async function handler(req, res) {
  const variables = {
    slug: req.body.slug,
  };

  // console.log(Object.values(variables))

  //   async function runner() {
  //     if (req.body.slug) {
  //       let Req = req.body.slug;

  //       // console.log(Req);

  //       return Req;
  //     } else {
  //       // console.log("is empty")
  //     }
  //   }

  //   // runner()
  // //   console.log(runner());

  // console.log(variables.slug)

  const graphQLClient = new GraphQLClient("http://localhost:1337/graphql");
  const query = gql`
    query ($slug: String!) {
      services(filters: { slug: { eq: $slug } }) {
        data {
          attributes {
            Name

            Task {
              Task
            }

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
          }
        }
      }
    }
  `;

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

  const data = await graphQLClient.request(query, variables);
  const dataAll = await graphQLClient.request(queryAll);
  const attributes = data.services.data;
  const attributesAll = dataAll.services.data;

  res.status(200).json({ theName: attributes, theNameAll: attributesAll });
  // const dummy = await axios("https://dummyjson.com/products");
  // console.log(data);
}
