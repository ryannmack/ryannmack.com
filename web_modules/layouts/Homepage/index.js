import React, { Component, PropTypes } from "react"

import Page from "../Page"

export default class Homepage extends Component {
  static contextTypes = {
    collection: PropTypes.array.isRequired,
  }

  render() {

    return (
      <Page { ...this.props } />
    )
  }
}
