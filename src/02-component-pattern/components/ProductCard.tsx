import {createContext, CSSProperties, ReactElement} from 'react';
import styleModule from '../styles/styles.module.css';
import {UseProduct} from "../hooks";
import {Product, ProductContextProps} from "../type";

export type Props = {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
}

export const ProductContext = createContext<ProductContextProps>({} as ProductContextProps);
const {Provider} = ProductContext;

export const ProductCard = ({product, children, className, style}: Props) => {
  const {counter, incrementBy} = UseProduct();
  return (
    <Provider value={{product, counter, incrementBy}}>
      <article
        style={style}
        className={ `${ styleModule.productCard } ${ className }` }>
        {children}
      </article>
    </Provider>
  );
};
