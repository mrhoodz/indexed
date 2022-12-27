

// // import axios from "axios";
// // import { GraphQLClient, gql } from "graphql-request";

// // export default async function handler(req, res) {
// //   const graphQLClient = new GraphQLClient("http://localhost:1337/graphql");

// //   const query = gql`
// //     query {
// //       services {
// //         data {
// //           attributes {
// //             Name
// //             Task {
// //               Task
// //             }
// //           }
// //         }
// //       }
// //     }
// //   `;


// //   const data = await graphQLClient.request(query);
// //   const sorted = data.services.data;

// //   const dummy = await axios("https://dummyjson.com/products");



// //   res.status(200).json({ createAt: dummy.data, theName: sorted});
// //   // console.log(data);
// // }

// // // getStaticProps();



// import { request, gql } from 'graphql-request'


// export default async function handler(req, res) {





// const query = gql`
// query {
//   services {
//     data {
//       attributes {
//         Name
//         Task {
//           Task
//         }
//       }
//     }
//   }
// }
// `;

// request('https://dummyjson.com/products', query).then((data) => console.log(data))


// }



// import { ApolloServer } from '@apollo/server';
// import { startStandaloneServer } from '@apollo/server/standalone';

// // A schema is a collection of type definitions (hence "typeDefs")
// // that together define the "shape" of queries that are executed against
// // your data.
// const typeDefs = `#graphql
//   # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

//   # This "Book" type defines the queryable fields for every book in our data source.
//   type Book {
//     title: String
//     author: String
//   }

//   # The "Query" type is special: it lists all of the available queries that
//   # clients can execute, along with the return type for each. In this
//   # case, the "books" query returns an array of zero or more Books (defined above).
//   type Query {
//     books: [Book]
//   }
// `;