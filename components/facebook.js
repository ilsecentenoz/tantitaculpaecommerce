import React, { Component } from "react";
import {
  FacebookProvider,
  Like,
  Comments,
  EmbeddedPost,
  Feed,
  Page,
} from "react-facebook";

export default class Example extends Component {
  render() {
    return (
      <FacebookProvider appId="284659879598388">
        <Page href="https://www.facebook.com" tabs="timeline" />
      </FacebookProvider>
    );
  }
}
