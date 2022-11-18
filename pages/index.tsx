import React from "react";
import { client } from "../lib/client";
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
import { NextPage } from "next";

interface HomeProps {
  products: any[];
  bannerData: any[];
}

const Home = ({ products, bannerData }: HomeProps) => (
  <div>
    <HeroBanner />
    {/* {console.log(bannerData)} */}
    <div className="products-heading">
      <h2>Best Selling Products</h2>
      <p>Speakers of many variations</p>
    </div>
    <div className="products-container">
      {products?.map((items) => items.name)}
    </div>
    <FooterBanner />
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products: string = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: {
      products,
      bannerData,
    },
  };
};

export default Home;
