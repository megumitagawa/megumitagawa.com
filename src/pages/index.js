import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="home" />
  </Layout>
)

IndexPage.propTypes = {
  location: PropTypes.object.isRequired
}

export default IndexPage
