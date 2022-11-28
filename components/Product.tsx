import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";
import { Products, IproductProp } from "../typing";

const Product: React.FC<IproductProp> = ({
  product: { image, slug, name, price },
}) => {
  return <div>Product</div>;
};

export default Product;
