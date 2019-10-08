import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query {
    site {
      siteMetadata {
        siteTitle: title
        description: description
        author
        image
        siteUrl
        twitterUsername
      }
    }
  }
`

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(getData)
  const {
    siteTitle,
    author,
    image,
    siteUrl,
    twitterUsername,
  } = site.siteMetadata

  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | ${siteTitle}`}>
      <meta name="description" content="Travel website build with GatsbyJS" />
      <meta name="image" content={image} />
      <meta name="author" content={author} />
      <meta name="twitter:title" content={siteTitle} />
      <meta
        name="twitter:description"
        content="Travel website build with GatsbyJS"
      />
      <meta name="twitter:username" content={twitterUsername} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={siteTitle} />
      <meta
        property="og:description"
        content="Travel website build with GatsbyJS"
      />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="300" />
    </Helmet>
  )
}

export default SEO
