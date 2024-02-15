import {createContext, ReactElement} from 'react';
import {useProduct} from "../hooks/useProduct";

import {ProductContextProps, Product} from "../interfaces/product.interfaces";

import styles from '../styles/styles.module.css';
export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
}
export const ProductCard = ({ product, children, className }: Props) => {
  const { counter, increaseBy } = useProduct({
    initialCounter: 0
  });

  return (
    <Provider value={{ counter, increaseBy, Product: product }}>
      <div className={ `${ styles.productCard } ${ className }` }>
        {children}
      </div>
    </Provider>
  );
};
