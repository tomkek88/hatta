import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import Button from "../components/Button/Button"

const ContentWrapper = styled.div`
  width: 65%;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  text-align: right;

  h1 {
    font-size: 85px;
    margin: 0;
    width: 40%;
    line-height: 0.9;
  }

  p {
    padding: 20px 0 40px;
    width: 40%;
  }
`

const ImageWrapper = styled(Image)`
  position: absolute !important;
  width: 35%;
  height: 100vh;
  top: 0;
  right: 0;
  object-fit: cover;
`

const IndexPage = ({ data }) => (
  <div>
    <ContentWrapper>
      <h1>Your New Space</h1>
      <p>
        While artists work from real to the abstract, architects must work from
        the abstract to real
      </p>
      <Button>estimate project</Button>
    </ContentWrapper>
    <ImageWrapper fluid={data.file.childImageSharp.fluid} />
  </div>
)

export const query = graphql`
  {
    file(name: { eq: "hero" }) {
      childImageSharp {
        fluid(maxHeight: 1200, maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
