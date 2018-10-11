import React from "react"
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby"
import { css } from "react-emotion"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"

export default ({ data }) => {
    console.log(data)
    return (
        <div className="wrapper">
            <Helmet>
                <meta charSet="utf-8" />
                <title>My Title</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Layout>
            <div>
                <h1
                    className={css`
                        display: inline-block;
                        border-bottom: 1px solid;
                    `}
                >
                Amazing Pandas Eating Things
                </h1>
                <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                    <div key={node.id}>
                        <Link
                            to={node.fields.slug}
                            className={css `
                                text-decoration: none;
                                color: inherit
                            `
                            }
                        >
                        <h3 
                            className={css`
                                margin-bottom: ${rhythm(1/4)};
                            `}
                        >
                            {node.frontmatter.title}{" "}    
                            <span 
                                className={css`
                                    color: #bbb;
                                `}
                            >
                                - {node.frontmatter.date}
                            </span>
                        </h3>
                        <p>{node.excerpt}</p>
                        </Link>
                    </div>
                ))}
            </div>
            </Layout>
        </div>
   )}

   export const query = graphql`
            query {
                allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
                    totalCount
                    edges {
                        node {
                            id
                            frontmatter {
                                title
                                date(formatString: "DD MMMM, YYYY")
                            }
                            fields {
                                slug
                            }
                            excerpt
                        }
                    }
                }
            }
   `