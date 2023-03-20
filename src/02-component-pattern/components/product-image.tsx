import React, {useContext} from "react";
import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";
import {ProductContext} from "./product-card";

export const ProductImage = ({img = ''}) => {
  const { Product } = useContext(ProductContext);
  let imageToShow: string;
  imageToShow = img ? img : Product.image ? Product.image : noImage;

  return (
    <img className={ styles.productImg } src={ imageToShow } alt="Product Image"/>
  );
};
