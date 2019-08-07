import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="home" />
  </Layout>
)

export default IndexPage
