// https://takumon.com/simple-gatsby-image-wrapper

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import BgImg from "gatsby-background-image"

const BackgroundImageFluid = ({ relativePath, children }) => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              fluid(maxWidth: 1280) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  const image = data.images.edges.find(edge => {
    return edge.node.relativePath.includes(relativePath)
  })
  return <BgImg fluid={image.node.childImageSharp.fluid}>{children}</BgImg>
}

BackgroundImageFluid.propTypes = {
  relativePath: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default BackgroundImageFluid
