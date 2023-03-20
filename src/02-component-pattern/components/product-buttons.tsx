import React, {useContext} from "react";
import styles from "../styles/styles.module.css";
import {ProductContext} from "./product-card";

export const ProductButtons = () => {
  const { counter, increaseBy } = useContext( ProductContext );

  return (
    <div className={ styles.buttonsContainer }>
      <button
        className={ styles.buttonMinus }
        onClick={ () => increaseBy(-1) }>-</button>
      <span className={ styles.countLabel }>{ counter }</span>
      <button
        className={ styles.buttonAdd }
        onClick={ () => increaseBy(+1) }>+</button>
    </div>
  );
}
