import React, {CSSProperties, useCallback, useContext} from "react";
import styleModule from "../styles/styles.module.css";
import {ProductContext} from "./ProductCard";

export type Props = {
  className?: string;
  style?: CSSProperties;
}
export const ProductButtons = ({className, style}: Props) => {
  const {counter, incrementBy, maxCount } = useContext(ProductContext);
  const isMaxReached = useCallback(() => !!maxCount && counter === maxCount, [counter, maxCount]);
  return (
    <footer
      style={style}
      className={`${styleModule.buttonsContainer} ${className}`}>
      <button onClick={() => incrementBy(-1)} className={styleModule.buttonMinus}> -</button>
      <p className={styleModule.countLabel}>{counter}</p>
      <button disabled={isMaxReached()} onClick={() => incrementBy(+1)} className={`${ styleModule.buttonAdd } ${ isMaxReached() && styleModule.disabled }`}> +</button>
    </footer>
  )
}
