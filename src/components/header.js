import { Link } from "gatsby"
import React from "react"
import PropTypes from "prop-types"

import css from "../styles/header.module.css"

const Header = ({ h1 }) => {
  const Tag = h1 ? "h1" : "p"
  return (
    <header className={css.header}>
      <Link to="/">
        <p className={css.occupation}>composer / arranger / keyboardist</p>
        <Tag className={css.name}>megumi tagawa</Tag>
      </Link>
    </header>
  )
}

Header.propTypes = {
  h1: PropTypes.bool.isRequired,
}

export default Header
