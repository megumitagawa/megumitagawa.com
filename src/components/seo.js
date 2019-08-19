/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { siteMetadata } from "../../gatsby-config"

const SEO = ({ description, title }) => {
  const titleSeparator = title ? " | " : ""
  const fullTitle = title + titleSeparator + siteMetadata.title
  return (
    <Helmet htmlAttributes={{ lang: "ja" }}>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content={`${siteMetadata.url}/images/og-image.jpg`}
      />
      <meta property="twitter:card" contact="summary_large_image" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Comfortaa|Noto+Sans+JP&display=swap"
      />
    </Helmet>
  )
}

SEO.defaultProps = {
  title: "",
  description: siteMetadata.description,
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

export default SEO
