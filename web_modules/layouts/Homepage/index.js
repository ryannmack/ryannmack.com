import React, { Component, PropTypes } from "react"
import Helmet from "react-helmet"
import invariant from "invariant"
import { joinUri } from "phenomic"
import { Link } from "react-router"

import rmLogo from "../../images/rm_logo.png"
import designIcon from "../../images/design_icon.png"
import devIcon from "../../images/development_icon.png"
import pmIcon from "../../images/project_management_icon.png"

class Homepage extends Component {
  render() {
    const { props, context } = this

    const {
      pkg,
    } = context.metadata

    const {
      __filename,
      __url,
      head,
    } = props

    invariant(
      typeof head.title === "string",
      `Your page '${ __filename }' needs a title`
    )

    const metaTitle = head.metaTitle ? head.metaTitle : head.title

    const meta = [
      { property: "og:type", content: "article" },
      { property: "og:title", content: metaTitle },
      {
        property: "og:url",
        content: joinUri(process.env.PHENOMIC_USER_URL, __url),
      },
      { property: "og:description", content: head.description },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: metaTitle },
      { name: "twitter:creator", content: `@${ pkg.twitter }` },
      { name: "twitter:description", content: head.description },
      { name: "description", content: head.description },
    ]

    return (
      <div>
        <Helmet
          meta={ meta }
          title={ metaTitle }
        />
      <div>
        <div className="homeHeader">
          <img
            alt="Ryann Mack Logo"
            className="homeHeaderLogo"
            src={ rmLogo }
          />
          <h1 className="pageTitle">
            I am Ryann Mack, a passionate designer and developer.
          </h1>
          <p className="pageSubTitle">
            <a href="mailto:hi@ryannmack.com">
              Contact me
            </a> if you want to work together. Cheers!
          </p>
        </div>
        <div className="container workCategories">
          <h2 className="workCategoriesHeader">
            Check Out My Work
          </h2>
          <div className="row">
            <div className="col-lg-4 workType">
              <Link to="/design">
                <img
                  alt="Pencil Icon"
                  className="circleIcons"
                  height={ 60 }
                  src={ designIcon }
                  width={ 70 }
                />
              </Link>
              <h3 className="workCategorieTitle">Design</h3>
              <p>
                7 Years in All Things Design
                <br />
                5 Years Designing Mobile Apps and Responsive Websites
              </p>
            </div>
            <div className="col-lg-4 workType">
              <Link to="/development">
                <img
                  alt="Code Icon"
                  className="circleIcons"
                  height={ 60 }
                  src={ devIcon }
                  width={ 70 }
                />
              </Link>
              <h3 className="workCategorieTitle">
                Front-End Development
              </h3>
              <p>
                Over 100 GitHub Commits
                <br />
                Building Websites - <Link to="/TODO">like this one</Link>
              </p>
            </div>
            <div className="col-lg-4 workType">
              <Link to="/project-management">
                <img
                  alt="Monitor Icon"
                  className="circleIcons"
                  height={ 60 }
                  src={ pmIcon }
                  width={ 70 }
                />
              </Link>
              <h3 className="workCategorieTitle">
                Project Management
              </h3>
              <p>
                5 Years Managing the Build of Mobile Apps and Websites
              </p>
            </div>
          </div>
        </div>
      </div>

      </div>
    )
  }
}

Homepage.propTypes = {
  children: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]),
  __filename: PropTypes.string.isRequired,
  __url: PropTypes.string.isRequired,
  head: PropTypes.object.isRequired,
  body: PropTypes.string.isRequired,
  header: PropTypes.element,
  footer: PropTypes.element,
}

Homepage.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Homepage
