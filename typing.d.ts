export interface Products extends ProductBody {
  map(arg0: (item: any) => JSX.Element): import("react").ReactNode;
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: "product";
}

export interface IStateContext {
  _id: number;
  quantity: number;
  image: string[];
  details: string;
  price: number;
  name: string;
}

export type ProductBody = {
  image: {}[];
  name: string;
  slug: string | any;
  price: number;
  details: string;
  quantity: number;
};

export type TFooterBanner = {
  footerBanner: Banner;
};

export interface IProductProp {
  key: string;
  product: Products;
}

export interface IBannerProp {
  heroBanner: Banner;
}

export interface IProductDetails extends IStateContext {
  image: string[];
  name: string;
  price: number;
  details: string;
}

image, name, price, details;
export interface ISlugDetails {
  product: IProductDetails;
  products: Products;
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
  urlFor: string;
  smallText: string;
  midText: string;
  largeText1: string;
  largeText2: string;
  discount: string;
  saleTime: saleTime;
}

export interface IcartItems {
  showCart: boolean;
  setShowCart: (value: boolean) => void;
  setCartItems: React.Dispatch<React.SetStateAction<IStateContext[]>>;
  setTotalPrice: (value: number) => void;
  setTotalQuantities: (value: number) => void;
  cartItems: IStateContext[];
  totalPrice: number;
  totalQuantities: number;
  qty: number;
  incQty: () => void;
  decQty: () => void;
  onAdd: (product: IStateContext, quantity: number) => void;
  toggleCartItemQuantity: (id: number, value: string) => void;
  onRemove: (product: IStateContext) => void;
}
