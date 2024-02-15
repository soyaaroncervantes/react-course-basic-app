import React, {CSSProperties, useContext} from "react";
import noImage from "../assets/no-image.jpg";
import styleModule from "../styles/styles.module.css";
import {ProductContext} from "./ProductCard";

export type Props = {
  image?: string;
  className?: string;
  style?: CSSProperties;
}
export const ProductImage = ({image = '', className, style}: Props) => {
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
    <img
      style={style}
      className={ `${ styleModule.productImg } ${ className }` }
      src={imageToShow}
      alt={product.title}/>
  );
}
