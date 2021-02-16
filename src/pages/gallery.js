import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

const TitleWrapper = styled.div`
  width: 40%;
`

const GalleryWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const ImageContainer = styled.div`
  background-color: black;
  width: 25rem;
  margin: 1rem;
  overflow: hidden;
`

const ImageWrapper = styled(Image)`
  height: 100%;
  opacity: 0.5;
  transition: 0.3s;
  &:hover {
    transform: scale(1.1);
    opacity: 1;
  }
`

export const query = graphql`
  {
    allFile(filter: { absolutePath: { regex: "/gallery/" } }) {
      nodes {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  }
`

const GalleryPage = ({
  data: {
    allFile: { nodes },
  },
}) => (
  <>
    <TitleWrapper>
      <h1>Our work</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
        consequuntur voluptate tempora doloribus non aspernatur beatae ab
        incidunt dolorum et nostrum labore optio saepe, iusto enim ad? In,
        incidunt ratione.
      </p>
    </TitleWrapper>
    <GalleryWrapper>
      {nodes.map(elem => (
        <ImageContainer>
          <ImageWrapper fluid={elem.childImageSharp.fluid} />
        </ImageContainer>
      ))}
    </GalleryWrapper>
  </>
)

export default GalleryPage
