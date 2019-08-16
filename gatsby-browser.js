import React from "react"
import Layout from "./src/components/layout"

import "sanitize.css"
import "reset-css"
import "./src/styles/global.css"

// https://www.gatsbyjs.org/docs/browser-apis/#wrapRootElement
const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)

export {
  wrapPageElement
}
