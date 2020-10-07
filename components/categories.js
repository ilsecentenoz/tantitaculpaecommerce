import React, { Component } from "react";
// import styles from "../styles/Categories.module.scss";
import Griddle, { plugins } from "griddle-react";

export default class Categories extends Component() {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 0,
          name: "Mayer Leonard",
          city: "Kapowsin",
          state: "Hawaii",
          country: "United Kingdom",
          company: "Ovolo",
          favoriteNumber: 7,
        },
      ],
    };
  }
  render() {
    return (
      <>
        <Griddle data={this.state.data} plugins={[plugins.LocalPlugin]} />
      </>
    );
  }
}
