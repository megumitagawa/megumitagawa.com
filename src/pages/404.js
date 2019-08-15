import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import SEO from "../components/seo"
import DottedLine from '../components/dotted-line'

const NotFoundPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="404" />
    <h1>
      <DottedLine>404</DottedLine>
    </h1>
    <h2>Not found :(</h2>
  </Layout>
)

NotFoundPage.propTypes = {
  location: PropTypes.object.isRequired
}

export default NotFoundPage
