import React from "react"
import { siteMetadata } from "../../gatsby-config"

import css from "../styles/footer.module.css"

const Footer = () => (
  <footer className={css.footer}>
    <p className={css.copyright}>
      <small>
        &copy; {new Date().getFullYear()} {siteMetadata.title}
      </small>
    </p>
  </footer>
)

export default Footer
