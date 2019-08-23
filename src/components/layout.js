/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import Header from "./header"
import Nav from "./nav"
import Footer from "./footer"
import BackgroundImageFluid from "./background-image-fluid"

import css from "../styles/layout.module.css"

const Layout = ({ children, location }) => {
  const duration = 500
  const indexPage = location.pathname === "/"
  return (
    <BackgroundImageFluid relativePath="bg.jpg" className={css.bg}>
      <Header h1={indexPage} />
      <div
        className={`
          ${css.wrapper}
          ${indexPage ? css.isActive : ""}
        `}
        style={{ transitionDuration: `${duration}ms` }}
      >
        <Nav />
        <main className={css.main}>
          <TransitionGroup component={null}>
            <CSSTransition
              key={location.pathname}
              timeout={{ enter: duration, exit: duration }}
            >
              {children}
            </CSSTransition>
          </TransitionGroup>
        </main>
      </div>
      <Footer />
    </BackgroundImageFluid>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
}

export default Layout
