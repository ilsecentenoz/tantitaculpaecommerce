import Link from "next/link";
import styles from "../styles/Sliders.module.scss";
import { Carousel } from "react-responsive-carousel";
import React, { Component } from "react";
//images

export default class Slider extends Component {
  renderSlider = () => {
    let sliderImages = [];
    this.props.gatito.map(function (x, index) {
      sliderImages.push(
        <div key={index}>
          <img src={x.url} />
        </div>
      );
    });

    return sliderImages;
  };

  render() {
    return <Carousel showArrows={true}>{this.renderSlider()}</Carousel>;
  }
}
