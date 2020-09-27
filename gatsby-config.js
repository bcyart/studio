module.exports = {
  siteMetadata: {
    title: `BCY ART`,
    description: `BCY ART’ a hoş geldiniz. Burası isteklerin ve fikirlerin sanatla harmanlanıp, filme dönüştüğü yer. Kısaca burası sinematik çalışmaların doğduğu topraklar.Video içerik , video kurgu ,drone çekimleri ,fotoğraf çekimleri ve banner tasarımları için doğru yerdesiniz.`,
    keywords:`video,kurgu,içerik,banner,renk,edit,drone,fotoğraf,studio,tasarımi,motion graphic,grafik,intro`,
    image: `/static/bcyart.jpg`,
    url:`bcyart.net`,
    author:`berkay-yüksel`,
    
  },
  plugins: [
    
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

/*

     <Helmet>
        <title>BCY-ART </title>
        <meta name="description" content="  "/>
      <meta name="keywords" content="" />
      <meta name="robots" content="index,follow"></meta>
      </Helmet>


*/