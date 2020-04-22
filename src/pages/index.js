import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PolaroidItem from "../components/PolaroidItem"
import Header from "../components/header"
import "../style.scss"
import "../components/layout.css"

const shuffle = array => {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

const IndexPage = props => {
  const [displayImages, setDisplayImages] = useState([])
  const data = props.data.allFile.edges

  useEffect(() => {
    setDisplayImages(shuffle(data).slice(0, 26))
  }, [data])

  const refreshImages = () => {
    console.log("refreshImages")
    setDisplayImages(shuffle(data).slice(0, 26))
  }

  return (
    <Layout>
      <SEO title="26 Go Up Moments" />
      <Header refreshImages={refreshImages} />
      <div className="container">
        <h1>26 Go Up Moments</h1>
        <div className="container__items">
          {displayImages.map((imageData, i) => (
            <PolaroidItem key={imageData.id} data={imageData} number={i + 1} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "uploads" } }) {
      edges {
        node {
          id
          childImageSharp {
            fluid(maxWidth: 400, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
