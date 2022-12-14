import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";
import { IProductProp } from "../typing";

const Product: React.FC<IProductProp> = ({
  product: { image, slug, name, price },
}) => {
  return (
    <>
      <div>
        <Link href={`/product/${slug.current}`}>
          <div className="product-card">
            <img
              src={urlFor(image && (image[0] as string))}
              width={250}
              height={250}
              className="product-image"
            />
            <p className="product-name">{name}</p>
            <p className="product-price">${price}</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Product;
