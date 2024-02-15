import React, {useContext} from "react";
import style from "../styles/styles.module.css";
import {ProductContext} from "./ProductCard";

export const ProductButtons = () => {
  const {counter, incrementBy} = useContext(ProductContext);
  return (
    <footer className={style.buttonsContainer}>
      <button onClick={() => incrementBy(-1)} className={style.buttonMinus}> -</button>
      <div className={style.countLabel}>{counter}</div>
      <button onClick={() => incrementBy(+1)} className={style.buttonAdd}> +</button>
    </footer>
  )
}
