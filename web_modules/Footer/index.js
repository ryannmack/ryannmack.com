import React, { Component } from "react"
import { Link } from "react-router"

import Svg from "react-svg-inline"

import githubSvg from "../images/github_logo.svg"
import twitterSvg from "../images/twitter_logo.svg"
import styles from "./index.css"

export default class Footer extends Component {

  render() {
    return (
      <footer className="container">
        <div className="footerInfo">
          <a
            className="footerInfoMargin footerEmail"
            href="mailto:hi@ryannmack.com"
          >
            hi@ryannmack.com
          </a>
          <a
            href="https://twitter.com/ryann_mack"
            target="_blank"
          >
            <Svg
              alt="Twitter Logo"
              className="footerInfoMargin"
              height="24px"
              svg={ twitterSvg }
              width="24px"
            />
          </a>
          <a
            href="https://github.com/ryannmack"
            target="_blank"
          >
            <Svg
              alt="GitHub Logo"
              height="24px"
              svg={ githubSvg }
              width="24px"
            />
          </a>
          // REMOVE 404 and Loading for testing.
          <p>
            <Link
              className={ styles.link }
              to="/404.html"
            >
              { "404" }
            </Link>
            { ", " }
            <Link
              className={ styles.link }
              to="/loading"
            >
              { "Loading" }
            </Link>
          </p>
        </div>
      </footer>
    )
  }
}
