import {JSX} from "react";
import {Props as ProductCardProps} from "../components/ProductCard";
import {Props as ProductButtonsProps} from "../components/ProductButtons";
import {Props as ProductTitleProps} from "../components/ProductTitle";
import {Props as ProductImageProps} from "../components/ProductImage";

export type Product = {
  id: string;
  image?: string;
  title: string
}

export type ProductContextProps = {
  counter: number;
  incrementBy: (value: number) => void;
  product: Product;
  maxCount?: number;
}

export type ProductCardHOCProps = {
  Buttons: (props: ProductButtonsProps) => JSX.Element;
  Image: (props: ProductImageProps) => JSX.Element;
  Title: (props: ProductTitleProps) => JSX.Element;
  (props: ProductCardProps): JSX.Element;
}

export type OnChangeArgs = {
  product: Product;
  count: number;
}

export type ProductInCart = Product & {
  count: number;
}

export type InitialValuesProductCard = {
  count?: number;
  maxCount?: number;
}

export interface ProductCardHandlers {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: Product;
  increaseBy: (value: number) => void;
  reset: () => void;
}
