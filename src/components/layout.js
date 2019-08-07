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
import BackgroundImageFluid from "./background-image-fluid"

import "sanitize.css"
import "reset-css"
import styles from "./layout.module.css"

const Layout = ({ children, location }) => {
  const headerH1 = location.pathname === "/"
  return (
    <BackgroundImageFluid relativePath="bg.jpg">
      <div className={styles.wrapper}>
        <Header h1={headerH1} />
        <Nav />
        <main>{children}</main>
        <Footer />
      </div>
    </BackgroundImageFluid>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
}

export default Layout
