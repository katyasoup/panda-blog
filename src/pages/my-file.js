import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet";
import Layout from "../components/layout"

export default ({ data }) => {
    console.log(data)
    return (
        <div className="wrapper">
        <Helmet>
            <meta charSet="utf-8" />
            <title>Pandas Eating Lots</title>
            <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>    
        <Layout>
            <div>
            <h1>My Site's Files</h1>
            <table>
                <thead>
                <tr>
                    <th>relativePath</th>
                    <th>prettySize</th>
                    <th>extension</th>
                    <th>birthTime</th>
                </tr>
                </thead>
                <tbody>
                {data.allFile.edges.map(({ node }, index) => (
                    <tr key={index}>
                    <td>{node.relativePath}</td>
                    <td>{node.prettySize}</td>
                    <td>{node.extension}</td>
                    <td>{node.birthTime}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </Layout>
        </div>
    )
  }

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`