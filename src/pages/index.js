import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import ReactMarkdown from "react-markdown"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import "../styles/global.css"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <ul>
      {data.allStrapiArticle.edges.map(article => (
        <li key={article.node.id}>
          <h2>
            <Link to={`/articles/${article.node.id}`}>
              {article.node.title}
            </Link>
          </h2>
          {article.node.image ? (
            <Img fixed={article.node.image.childImageSharp.fixed} />
          ) : null}
          <p>{article.node.content}</p>
          {/* <ReactMarkdown
            source={article.node.content}
            transformImageUri={uri =>
              uri.startsWith("http")
                ? uri
                : `${process.env.IMAGE_BASE_URL}${uri}`
            }
            className="indexArticle"
            escapeHtml={false}
          /> */}
          <Link to={`/articles/${article.node.id}`}>Read more</Link>
        </li>
      ))}
    </ul>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query MyQuery {
    allStrapiArticle {
      edges {
        node {
          id
          content
          title
          image {
            childImageSharp {
              # Specify the image processing specifications right in the query.
              # Makes it trivial to update as your page's design changes.
              fixed(width: 125, height: 125) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`
