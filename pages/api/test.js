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
    query {
      services {
        data {
          attributes {
            Name
            slug
            Task {
              Task
            }
          }
        }
      }
    }
  `;

  const data = await graphQLClient.request(query, variables);
  // const attributes = data.services.data;

  const attributes = data.services.data;

console.log(attributes)

  // console.log({data: Object.values(attributes)[0]});



  // Object.values(attributes).map((item) => (


  // const dummy = await axios.post("https://sea-lion-app-ggqop.ondigitalocean.app/api/services", {
  //   data: Object.values(attributes),
  // });


  // attributes.map((item) => ( console.log( attributes[item]) ))


  // ))

  //post with axios
  // const dummy = await axios.post("https://sea-lion-app-ggqop.ondigitalocean.app/api/services", {
  //   data: attributes.map((item) => ( Object.values(attributes)[item])),
  // });

  // console.log(dummy);

  res.status(200).json({ data: Object.values(attributes)[0] });
  // const dummy = await axios("https://dummyjson.com/products");
  // console.log(data);
}
