import React, {useContext} from "react";
import styles from "../styles/styles.module.css";
import {ProductContext} from "./product-card";

interface Props {
  title?: string;
  className?: string;
}

export const ProductTitle = ({title, className}: Props) => {
  const { Product } = useContext(ProductContext);
  return (
    <span className={ `${ styles.productDescription } ${ className }` }>{ title ? title : Product.title }</span>
  );
}
