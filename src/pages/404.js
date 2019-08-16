import React from "react"
import SEO from "../components/seo"
import DottedLine from '../components/dotted-line'

const NotFoundPage = () => (
  <div>
    <SEO title="404" />
    <h1>
      <DottedLine>404</DottedLine>
    </h1>
    <h2>Not found :(</h2>
  </div>
)

export default NotFoundPage
