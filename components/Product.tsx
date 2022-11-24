import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";
import { Products, productProp } from "../typing";

const Product: React.FC<productProp> = ({
  product: { image, slug, name, price },
}) => {
  return <div>Product</div>;
};

export default Product;
