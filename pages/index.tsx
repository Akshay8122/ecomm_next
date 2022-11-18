import React from "react";
import { client } from "../lib/client";
import type { NextPage } from "next";
import {
  Cart,
  Footer,
  FooterBanner,
  HeroBanner,
  Layout,
  Navbar,
  Product,
} from "../components";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <HeroBanner />
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div>{["Product 1", "Product 2"].map((product) => product)}</div>
      <FooterBanner />
    </div>
  );
};

export default Home;
