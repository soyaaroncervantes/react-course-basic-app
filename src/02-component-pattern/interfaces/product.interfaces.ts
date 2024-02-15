import {Props as ProductCardProps } from "../components/product-card";

export interface Product {
  id: string;
  title: string;
  image?: string;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  Product: Product;
}

export interface ProductCardHOCProps {
  ({ product, children }: ProductCardProps ): JSX.Element;
  Title: ({title}: {title?: string}) => JSX.Element;
  Image: ({img}: {img?: string}) => JSX.Element;
  Buttons: ({ className }: { className?: string }) => JSX.Element;
}
