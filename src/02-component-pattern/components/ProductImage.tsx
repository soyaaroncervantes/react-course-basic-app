import React, {useContext} from "react";
import noImage from "../assets/no-image.jpg";
import style from "../styles/styles.module.css";
import {ProductContext} from "./ProductCard";

export const ProductImage = ({image = ''}) => {
  const {product} = useContext(ProductContext);
  let imageToShow: string;

  if (image) {
    imageToShow = image;
  } else if (product.image) {
    imageToShow = product.image;
  } else {
    imageToShow = noImage;
  }

  return (
    <img className={style.productImg} src={imageToShow} alt={product.title}/>
  );
}
