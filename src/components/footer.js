import PropTypes from "prop-types"
import React from "react"

const Footer = ({ title }) => (
  <footer>
    <p>
      <small>© {new Date().getFullYear()} {title}</small>
    </p>
  </footer>
)

Footer.propTypes = {
  title: PropTypes.string
}

Footer.defaultProps = {
  title: ''
}

export default Footer
