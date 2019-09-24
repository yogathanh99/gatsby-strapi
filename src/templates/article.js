import React from "react"
import { Link, graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import Img from "gatsby-image"
import Layout from "../components/layout"

import "../styles/global.css"

const ArticleTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiArticle.title}</h1>
    <p>
      by{" "}
      <Link to={`/authors/User_${data.strapiArticle.author.id}`}>
        {data.strapiArticle.author.username}
      </Link>
    </p>
    {data.strapiArticle.image ? (
      <Img fluid={data.strapiArticle.image.childImageSharp.fluid} />
    ) : null}
    <p>{data.strapiArticle.content}</p>
    {/* <ReactMarkdown
      source={data.strapiArticle.content}
      transformImageUri={uri =>
        uri.startsWith("http") ? uri : `${process.env.IMAGE_BASE_URL}${uri}`
      }
      className="articleContent"
      escapeHtml={false}
    /> */}
  </Layout>
)

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiArticle(id: { eq: $id }) {
      title
      content
      image {
        childImageSharp {
          fluid(maxWidth: 960) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      author {
        id
        username
      }
    }
  }
`
