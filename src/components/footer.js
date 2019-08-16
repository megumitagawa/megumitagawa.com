import React from "react"

import css from "../styles/footer.module.css"

const Footer = () => (
  <footer className={css.footer}>
    <p className={css.copyright}>
      <small>
        &copy; {new Date().getFullYear()} megumi tagawa
      </small>
    </p>
  </footer>
)

export default Footer
