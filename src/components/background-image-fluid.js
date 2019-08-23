// https://takumon.com/simple-gatsby-image-wrapper

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const BackgroundImageFluid = ({ relativePath, children, Tag, className }) => {
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
  return (
    <BackgroundImage
      fluid={image.node.childImageSharp.fluid}
      Tag={Tag}
      className={className}
    >
      {children}
    </BackgroundImage>
  )
}

BackgroundImageFluid.propTypes = {
  relativePath: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  Tag: PropTypes.string,
  className: PropTypes.string,
}

BackgroundImageFluid.defaultProps = {
  Tag: "div",
  className: "",
}

export default BackgroundImageFluid
