import axios from "axios";
import { GraphQLClient, gql } from "graphql-request";

export default async function handler(req, res) {
  const variables = {
    slug: "agricultural-engineering",
    test: req.body.slug,
  };

  // console.log(Object.values(variables))

  async function runner() {
    if (req.body.slug) {
      let Req = req.body.slug;

      // console.log(Req);

      return Req;
    } else {
      // console.log("is empty")
    }
  }

  // runner()
  // console.log(runner());

  const graphQLClient = new GraphQLClient("http://localhost:1337/graphql");
  const query = gql`
    query  {
      services {
        data {
          attributes {
            Name
          }
        }
      }
    }
  `;

  const data = await graphQLClient.request(query, variables);
  const attributes = data.services.data;

  res.status(200).json({ theName: attributes });
  // const dummy = await axios("https://dummyjson.com/products");
  // console.log(data);
}
