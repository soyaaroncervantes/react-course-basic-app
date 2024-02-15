import React, {CSSProperties, useContext} from "react";
import styleModule from "../styles/styles.module.css";
import {ProductContext} from "./ProductCard";

export type Props = {
  className?: string;
  style?: CSSProperties;
}
export const ProductButtons = ({className, style}: Props) => {
  const {counter, incrementBy} = useContext(ProductContext);
  return (
    <footer
      style={style}
      className={`${styleModule.buttonsContainer} ${className}`}>
      <button onClick={() => incrementBy(-1)} className={styleModule.buttonMinus}> -</button>
      <p className={styleModule.countLabel}>{counter}</p>
      <button onClick={() => incrementBy(+1)} className={styleModule.buttonAdd}> +</button>
    </footer>
  )
}
