import { Link } from "gatsby"
import React from "react"
import { siteMetadata } from "../../gatsby-config"

const Header = () => (
  <header>
    <Link to="/">
      <p>{siteMetadata.description}</p>
      <h1>{siteMetadata.title}</h1>
    </Link>
  </header>
)

export default Header
