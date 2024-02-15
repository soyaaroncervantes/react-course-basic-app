import {ReactElement, JSX} from "react";

export type ProductCardProps = {
  product: Product;
  children?: ReactElement | ReactElement[];
}

export type Product = {
  id: string;
  title: string;
  image?: string
}

export type ProductContextProps = {
  counter: number;
  incrementBy: (value: number) => void;
  product: Product;
}

export type ProductCardHOCProps = {
  ({product, children}: ProductCardProps) : JSX.Element;
  Title: ({title}: {title?: string}) => JSX.Element;
  Image: ({image}: {image?: string}) => JSX.Element;
  Buttons: () => JSX.Element;
}
