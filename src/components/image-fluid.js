// https://takumon.com/simple-gatsby-image-wrapper

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ImageFluid = ({ relativePath }) => {
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
  return <Img fluid={image.node.childImageSharp.fluid} />
}

export default ImageFluid
