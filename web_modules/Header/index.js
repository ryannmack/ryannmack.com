import React, { Component, PropTypes } from "react"
import { Link } from "react-router"

import rmLogo from "../images/rm_logo.png"

export default class Header extends Component {

  static contextTypes = {
    metadata: PropTypes.object.isRequired,
  };

  render() {

    return (
      <div className="navHeader clearfix">
        <nav>
          <ul className="nav nav-pills pull-xs-right">
            <li className="nav-item">
              <Link
                activeClassName="nav-active"
                className="nav-link"
                to="/design"
              >
                Design
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClassName="nav-active"
                className="nav-link"
                to="/development"
              >
                Development
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClassName="nav-active"
                className="nav-link"
                to="/project-management"
              >
                Project Management
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="mailto:hi@ryannmack.com"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <Link className="navbar-brand" to="/">
          <img
            alt="Ryann Mack Logo"
            className="navLogo"
            src={ rmLogo }
          />
        </Link>
      </div>

    )
  }
}
