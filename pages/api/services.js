// export default function handler(req, res) {
//   // const serviceResponse = await fetcher(
//   //     `${process.env.NEXT_STRAPI_URL}/services`
//   //   );

//   const randomNumber = Math.floor(Math.random() * 100);

//   res.status(200).json({ createdAt: new Date(), number: randomNumber });
// }



// import axios from "axios";


// export default async function handler(req, res) {
//     // const serviceResponse = await fetcher(
//     //     `${process.env.NEXT_STRAPI_URL}/services`
//     //   );

//     const serviceResponse = await axios.get("http://localhost:1337/api/services");

  
//     const randomNumber = Math.floor(Math.random() * 100);
//     console.log(serviceResponse.data)
  
//     res.status(200).json({ createdAt: new Date(), number: serviceResponse.data });
//   }
  



import axios from "axios";


export default async function handler(req, res) {
    // const serviceResponse = await fetcher(
    //     `${process.env.NEXT_STRAPI_URL}/services`
    //   );

    const serviceResponse = await axios.get("http://localhost:1337/graphql");

  
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(serviceResponse.data)
  
    res.status(200).json({ createdAt: new Date(), number: serviceResponse.data });
  }
  





  