import { Link } from "gatsby"
import React from "react"
import PropTypes from "prop-types"
import { siteMetadata } from "../../gatsby-config"

const Header = ({ h1 }) => {
  const Tag = h1 ? "h1" : "p"
  return (
    <header>
      <Link to="/">
        <p>{siteMetadata.description}</p>
        <Tag>{siteMetadata.title}</Tag>
      </Link>
    </header>
  )
}

Header.propTypes = {
  h1: PropTypes.bool.isRequired
}

export default Header
