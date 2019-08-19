import React from "react"
import PropTypes from "prop-types"
import SEO from "../components/seo"
import Paragraphs from "../components/paragraphs"
import DottedLine from "../components/dotted-line"
import { graphql } from "gatsby"

const WorksPage = ({ data }) => {
  const body = data.contentfulPage.text.content.map((node, i) => {
    const value = node.content[0].value
    let el = null
    switch (node.nodeType) {
      case "heading-2":
        el = <h2>{value}</h2>
        break
      case "paragraph":
        el = <Paragraphs contents={value} />
        break
      default:
    }
    return <React.Fragment key={i}>{el}</React.Fragment>
  })
  return (
    <div>
      <SEO title="works" />
      <h1>
        <DottedLine>works</DottedLine>
      </h1>
      {body}
    </div>
  )
}

WorksPage.propTypes = {
  data: PropTypes.object,
}

export default WorksPage

export const query = graphql`
  query {
    contentfulPage(slug: { eq: "works" }) {
      text {
        content {
          nodeType
          content {
            value
          }
        }
      }
    }
  }
`
