import React, {createContext} from 'react';
import style from '../styles/styles.module.css';
import {UseProduct} from "../hooks";
import {ProductCardProps, ProductContextProps} from "../type";

export const ProductContext = createContext<ProductContextProps>({} as ProductContextProps);
const {Provider} = ProductContext;

export const ProductCard = ({product, children}: ProductCardProps) => {
  const {counter, incrementBy} = UseProduct();
  return (
    <Provider value={{product, counter, incrementBy}}>
      <article className={style.productCard}>
        {children}
      </article>
    </Provider>
  );
};
