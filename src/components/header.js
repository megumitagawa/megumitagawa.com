import { Link } from "gatsby"
import React from "react"
import PropTypes from "prop-types"
import { siteMetadata } from "../../gatsby-config"

import css from "../styles/header.module.css"

const Header = ({ h1 }) => {
  const Tag = h1 ? "h1" : "p"
  return (
    <header className={css.header}>
      <Link to="/">
        <p className={css.occupation}>
          {siteMetadata.description}
        </p>
        <Tag className={css.name}>
          {siteMetadata.title}
        </Tag>
      </Link>
    </header>
  )
}

Header.propTypes = {
  h1: PropTypes.bool.isRequired
}

export default Header
