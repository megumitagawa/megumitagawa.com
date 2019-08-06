import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ title, description }) => (
  <header>
    <Link to="/">
      <p>{description}</p>
      <h1>{title}</h1>
    </Link>
  </header>
)

Header.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
}

Header.defaultProps = {
  title: '',
  description: ''
}

export default Header
