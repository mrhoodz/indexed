import React from 'react'

export default function index({data}: any): JSX.Element {

    function calculateDaysBetweenDates({begin , end}:any) {
        var date1 = new Date(begin);
        var date2 = new Date(end);
        var timeDiff = Math.abs(date2.getTime() - date1.getTime());
        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        return diffDays;
    }


  return (
    <>
    


    
    
    </>
  )
}


// export async function getServerSideProps () {
//     const res = await fetch('https://api.github.com/repos/vercel/next.js')
//     const json = await res.json()
//     return { props: { data: json } }
//   }


