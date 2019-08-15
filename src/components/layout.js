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

import css from "../styles/layout.module.css"

const tempNavActive = false

const Layout = ({ children, location }) => {
  const indexPage = location.pathname === "/"
  const navActive = indexPage || tempNavActive
  return (
    <BackgroundImageFluid relativePath="bg.jpg">
      <div className={css.spacer}>
        <Header h1={indexPage} />
        <div className={`
          ${css.wrapper}
          ${navActive ? css.isActive : ''}
        `}>
          <Nav />
          <main className={css.main}>
            {children}
          </main>
        </div>
        <Footer />
      </div>
    </BackgroundImageFluid>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
