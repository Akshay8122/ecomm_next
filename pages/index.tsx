import React from "react";
import { client } from "../lib/client";
import { Products, Banner, IBannerProp } from "../typing";
import { FooterBanner, HeroBanner, Product } from "../components";

type HomeProps = {
  products: Products[];
  bannerData: Banner[];
};

const Home = ({ products, bannerData }: HomeProps) => (
  <div>
    <HeroBanner heroBanner={bannerData && bannerData[0]} />
    <div className="products-heading">
      <h2>Best Selling Products</h2>

      <p>Speakers of many variations</p>
    </div>
    <div className="products-container">
      {products?.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>
    <FooterBanner footerBanner={bannerData && bannerData[0]} />
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

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
