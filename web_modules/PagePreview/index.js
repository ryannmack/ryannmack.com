import React, { PropTypes } from "react"
import { Link } from "react-router"

const PagePreview = ({ __url, title, date, image }) => {
  const pageDate = date ? new Date(date) : null

  return (
    <div>
      <Link to={ __url }>
        { title }
      </Link>
      <img src={ `/assets/${image}` } />
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
}

export default PagePreview
