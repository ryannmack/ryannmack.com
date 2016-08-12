import React, { Component } from "react"
import { Link } from "react-router"

import githubImage from "../images/github_logo.png"
import twitterImage from "../images/twitter_logo.png"
import styles from "./index.css"

export default class Footer extends Component {

  render() {
    return (
      <footer className="container">
        <p className="footerInfo">
          <a
            className="footerInfoMargin footerEmail"
            href="mailto:hi@ryannmack.com"
          >
            hi@ryannmack.com
          </a>
          <a href="https://twitter.com/ryann_mack" target="_blank">
            <img
              alt="Twitter Logo"
              className="footerInfoMargin socialIcon"
              src={ twitterImage }
            />
          </a>
          <a href="https://github.com/ryannmack" target="_blank">
            <img
              alt="GitHub Logo"
              className="socialIcon"
              src={ githubImage }
            />
          </a>
        </p>
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
      </footer>
    )
  }
}
