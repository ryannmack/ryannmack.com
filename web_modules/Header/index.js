import React, { Component, PropTypes } from "react"
import { Link } from "react-router"

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
              <Link activeClassName="active" className="nav-link" to="/design">
                Design
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClassName="active"
                className="nav-link"
                to="/development"
              >
                Development
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClassName="active"
                className="nav-link"
                to="/project-management"
              >
                Project Management
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="mailto:ryann@ryannmack.com"
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
            src="images/rm_logo.png"
          />
        </Link>
      </div>

    )
  }
}
