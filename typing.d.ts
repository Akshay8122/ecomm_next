export interface Product extends ProductBody {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: "product";
}

export type ProductBody = {
  image?: string[];
  name: string;
  slug: string;
  price: number;
  details: string;
};

export interface Banner extends BannerBody {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: "banner";
}

export type BannerBody = {
  buttonText: string;
  product: string;
  desc: string;
  image?: string;
  smallText: string;
  largeText1: string;
  largeText2: string;
  discount: string;
  saleTime: saleTime;
};
