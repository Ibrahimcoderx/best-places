import React from 'react'
import Head from 'next/head'



const Meta = ({ title, description, keywords }) => {

  return (

    <Head>

        <title>My Website - {title}</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" key="viewport" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />

    </Head>
    
  )
}


Meta.defaultProps ={

        title:"Best Weekend Ideas for Fun and Adventure | Discover the Perfect Getaway",

        description:"Get ready for an unforgettable weekend with our top 25 ideas for fun and adventure Whether you're looking for a romantic escape or a family-friendly getaway we have got you covered. Discover new activities and explore exciting destinations for the perfect weekend retreat.",

        keywords:"Weekend ideas, Romantic getaways, Family trips, Adventure activities, Fun activities"
}

export default Meta