export interface Products extends ProductBody {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: "product";
}

export type ProductBody = {
  image: {}[];
  name: string;
  slug: string;
  price: number;
  details: string;
};

export interface IproductProp {
  key: string;
  product: Products;
}

export interface IbannerProp {
  heroBanner: Banner;
}

export interface Banner {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: "banner";
  image: string;
  buttonText: string;
  product: string;
  desc: string;
  urlFor: any;
  // image?: string;
  smallText: string;
  midText: string;
  largeText1: string;
  largeText2: string;
  discount: string;
  saleTime: saleTime;
}
