import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const CoverImageResp = () => {
  const data = useStaticQuery(graphql`
    query {
      mobileImage: file(relativePath: { eq: "my-rock.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600, maxHeight: 800, quality: 60) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      desktopImage: file(relativePath: { eq: "tarmac.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600, maxHeight: 800, quality: 60) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const sources = [
    data.mobileImage.childImageSharp.fluid,
    {
      ...data.desktopImage.childImageSharp.fluid,
      media: `(min-width: 701px)`
    }
  ]

  return (
    <Img fluid={sources} />
  )
}

export default CoverImageResp
