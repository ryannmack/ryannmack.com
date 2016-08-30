import React, { PropTypes } from "react"
import { Link } from "react-router"

const PagePreview = ({ __url, title, date, image, description, tags }) => {
  const pageDate = date ? new Date(date) : null

  return (
    <div>
      <Link to={ __url }>
        <div className="designItemRight projectItem row">
          <div className="col-md-7">
            <a href="portfolio_details.html">
              <img
                alt="Project Image"
                className="projectImage"
                height={ 480 }
                src={ `/assets/${image}` }
                width={ 400 }
              />
            </a>
          </div>
          <div className="col-md-5">
            <div className="verticalCenter">
              <p className="projectItemType">
                { tags }
              </p>
              <h3 className="projectItemTitle">
                { title }
              </h3>
              <p className="projectItemDescription">
                { description }
              </p>
              <img
                alt="View Project Button"
                height={ 40 }
                src="images/forward_arrow_button.png"
                width={ 40 }
              />
            </div>
          </div>
        </div>

      </Link>
      {
        pageDate &&
        <small>
          { " " }
          <time key={ pageDate.toISOString() }>
            { pageDate.toDateString() }
          </time>
        </small>
      }
    </div>
  )
}

PagePreview.propTypes = {
  __url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.string,
}

export default PagePreview
