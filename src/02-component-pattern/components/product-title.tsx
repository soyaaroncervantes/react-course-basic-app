import React, {useContext} from "react";
import styles from "../styles/styles.module.css";
import {ProductContext} from "./product-card";

export const ProductTitle = ({title}: { title?: string }) => {
  const { Product } = useContext(ProductContext);
  return (
    <span className={ styles.productDescription }>{ title ? title : Product.title }</span>
  );
}
