/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Nav from "./nav"
import Footer from "./footer"

import "sanitize.css"
import "reset-css"
import "./layout.css"

const Layout = ({ children, location }) => {
  const headerH1 = location.pathname === "/"
  return (
    <>
      <Header h1={headerH1} />
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
}

export default Layout
