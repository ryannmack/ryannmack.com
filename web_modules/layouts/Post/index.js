import React, { Component, PropTypes } from "react"

import Page from "../Page"

class Post extends Component {

  // it's up to you to choose what to do with this layout ;)

  render() {
    const { props } = this
    const { head } = props
    const { image } = head

    const pageDate = head.date ? new Date(head.date) : null

    return (
      <Page
        { ...props }
        header={
          <header>

            {
              pageDate &&
              <time key={ pageDate.toISOString() }>
                { pageDate.toDateString() }
              </time>
            }
          </header>
        }
        footer={
          <img src={ `/assets/${image}` } />
        }
      />
    )
  }
}

Post.propTypes = {
  head: PropTypes.object.isRequired,
}

export default Post
