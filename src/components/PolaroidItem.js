import React from "react"
import Img from "gatsby-image"

const PolaroidItem = ({ data, number }) => {
  const randomRotation = Math.floor(Math.random() * (6 - -6 + 1) + -6)
  const sty = { transform: `rotate(${randomRotation}deg)` }
  return (
    <div className="polaroid one" style={sty}>
      <div className="polaroid__content">
        <div className="polaroid__content-image">
          <Img fluid={data.node.childImageSharp.fluid} />
        </div>
        <div className="polaroid__content-caption">
          <p>#{number}</p>
        </div>
      </div>
    </div>
  )
}

export default PolaroidItem
