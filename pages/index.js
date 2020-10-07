import React, { Component } from "react";
import Head from "next/head";
//components
import Navbar from "../components/navbar.js";
import Menu from "../components/menu.js";
import Slider from "../components/slider.js";
import Facebook from "../components/facebook.js";

//scss
import styles from "../styles/Home.module.scss";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        {
          url: "../assets/example.jpeg",
        },
        {
          url: "../assets/example2.jpeg",
        },
      ],
      images2: [
        {
          url:
            "https://images-na.ssl-images-amazon.com/images/I/613UlGuu8uL.jpg",
        },
        {
          url:
            "https://spoiler.bolavip.com/__export/1577462201768/sites/bolavip/img/2019/12/27/rick_and_morty_censura_netflix_cuarta_temporada_bip_bips_groserias_crop1577460410551.jpg_1902800913.jpg",
        },
      ],
    };
  }

  render() {
    return (
      <div className={styles.container}>
        <Head>
          <title>tantitaculpa.com</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <Menu />
        <Slider gatito={this.state.images} />
        {/* <Slider gatito={this.state.images2} /> */}
        <Facebook />
      </div>
    );
  }
}
