// https://takumon.com/simple-gatsby-image-wrapper

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const ImageFluid = ({ relativePath, alt, className }) => {
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
    <Image
      fluid={image.node.childImageSharp.fluid}
      alt={alt}
      className={className}
    />
  )
}

ImageFluid.propTypes = {
  relativePath: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
}

ImageFluid.defaultProps = {
  alt: "",
  className: "",
}

export default ImageFluid
