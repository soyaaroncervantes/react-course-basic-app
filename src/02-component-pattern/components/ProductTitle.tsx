import {Nullable} from "../type";
import React, {useContext} from "react";
import style from "../styles/styles.module.css";
import {ProductContext} from "./ProductCard";

export const ProductTitle = ({title = null}: { title?: Nullable<string> }) => {
  const {product} = useContext(ProductContext);
  return (
    <p className={style.productDescription}>{title ?? product.title}</p>
  );
};
