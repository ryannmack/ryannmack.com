import React, { Component, PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"

import Page from "../Page"
import PagesList from "../../PagesList"

export default class Design extends Component {
  static contextTypes = {
    collection: PropTypes.array.isRequired,
  }

  render() {
    const latestPosts = enhanceCollection(this.context.collection, {
      filter: { category: "design" },
      sort: "date",
      reverse: true,
    })

    return (
      <div>
        <Page { ...this.props }>
          <h2>Newest Posts</h2>
          <PagesList pages={ latestPosts } />
        </Page>
      </div>
    )
  }
}
