import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/goup-logo.svg"

const Header = ({ siteTitle, refreshImages }) => (
  <header
    style={{
      background: "#afc253",
      height: "110px",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      zIndex: 10,
      boxShadow: "0px 4px 6px 0px rgba(18,19,18,0.37)",
      position: "relative",
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `15px 40px`,
      }}
    >
      <h1 style={{ margin: 0, width: "100%", textAlign: "center" }}>
        <a
          href="https://www.goup.co.uk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={logo}
            alt="25 Go Up moments"
            style={{ display: "inline-block", width: "80px" }}
          />
        </a>
      </h1>
      <div
        onClick={refreshImages}
        className="refresh"
        style={{
          position: "absolute",
          right: "20px",
          top: "calc(50% - 12px)",
          width: "25px",
          cursor: "pointer",
        }}
      >
        <svg viewBox="0 0 1000 1000">
          <path
            fill="#373636"
            d="M679.7 759.6a308.4 308.4 0 01-209 55.8c-3.5-.3-6.9-.9-10.4-1.3-6.7-.9-13.3-1.8-19.8-3.1-4-.8-7.9-1.8-11.9-2.7-6.4-1.5-12.7-3-18.9-4.9-3-.9-5.9-2-8.9-3a256 256 0 01-21.2-7.9c-1.6-.6-3.1-1.4-4.6-2.1-8.1-3.6-16.1-7.4-23.8-11.7l-1.1-.6a318.4 318.4 0 01-90.9-75.9l-3.7-4.8a318 318 0 01-68.6-197.5h72.6a5 5 0 004.6-2.8c1-1.8.8-3.8-.2-5.4L141.8 306.3a5.4 5.4 0 00-4.4-2.4c-1.8 0-3.5.9-4.4 2.4L10.9 491.7a5.3 5.3 0 004.4 8.2h72.6a417 417 0 0073 236.4l1.6 2.9c4.8 6.9 10 13.2 15.1 19.7 1.9 2.5 3.7 5 5.7 7.4 7.5 9.2 15.5 17.9 23.7 26.4l2.3 2.4a409.5 409.5 0 0092.6 70.3l2.7 1.6c9.8 5.3 19.8 10.1 30 14.7l7.6 3.4c8.7 3.7 17.6 6.8 26.6 9.9 4.3 1.5 8.5 3 12.8 4.3 7.9 2.4 15.9 4.3 24 6.3 5.4 1.3 10.7 2.6 16.2 3.7 2.3.5 4.4 1.2 6.7 1.5 7.6 1.4 15.3 2.1 23 3.1l8.2 1.1a405.2 405.2 0 00276.7-73.4 50.5 50.5 0 0012.1-69.7 49 49 0 00-68.8-12.3M912.1 499.9c0-87.5-26.9-168.7-72.6-235.9-.7-1.1-1.1-2.3-1.9-3.4-5.7-8.2-11.9-15.9-18-23.5l-2.1-2.8a408.2 408.2 0 00-153.8-117l-4.9-2.2c-9.5-4-19.2-7.5-29-10.8-3.5-1.2-7-2.5-10.6-3.5-8.5-2.6-17.2-4.7-25.9-6.8-4.8-1.1-9.6-2.4-14.5-3.3-2.4-.5-4.7-1.2-7.1-1.6-6.5-1.1-13-1.6-19.6-2.5-4.5-.6-8.9-1.3-13.5-1.8-11-1-21.8-1.5-32.7-1.7-2 0-3.9-.3-5.9-.3l-1.1.1a405 405 0 00-235.2 75.3 50.5 50.5 0 00-12.2 69.7 49 49 0 0068.9 12.3 308.4 308.4 0 01239.8-51.3c3.2.6 6.4 1.5 9.5 2.2 7.1 1.6 14.3 3.4 21.2 5.5l6.6 2.2a314 314 0 0125.8 9.8A316 316 0 01742 299a318.4 318.4 0 0171.2 200.8h-72.7a5 5 0 00-4.6 2.8c-1 1.8-.8 3.8.2 5.4l122.1 185.4c.9 1.4 2.6 2.4 4.4 2.4s3.5-.9 4.4-2.4L989.1 508a5.3 5.3 0 00-4.4-8.2l-72.6.1z"
          />
        </svg>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
