import {Nullable} from "../type";
import React, {CSSProperties, useContext} from "react";
import styleModule from "../styles/styles.module.css";
import {ProductContext} from "./ProductCard";

export type Props = {
  title?: Nullable<string>;
  className?: string;
  style?: CSSProperties;
}
export const ProductTitle = ({title = null, className, style}: Props) => {
  const {product} = useContext(ProductContext);
  return (
    <p
      style={style}
      className={ `${ styleModule.productDescription } ${ className }`}>
      {title ?? product.title}
    </p>
  );
};
