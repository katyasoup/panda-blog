import React from "react"
// import { Helmet } from "react-helmet";
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => (
  <div className="wrapper">
    {/* <Helmet>
      <meta charSet="utf-8" />
      <title>Pandas Eating Lots</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet> */}
    <Layout>
      <h1>About {data.site.siteMetadata.title}</h1>
      <p>
        We are the only site running on your computer dedicated to showing the best
        photos and videos of pandas eating lots of food.
      </p>
    </Layout>
  </div>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`