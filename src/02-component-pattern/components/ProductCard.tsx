import {createContext, CSSProperties, ReactElement} from 'react';
import styleModule from '../styles/styles.module.css';
import {useProduct} from "../hooks";
import {OnChangeArgs, Product, ProductContextProps} from "../type";

export type Props = {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
}

export const ProductContext = createContext<ProductContextProps>({} as ProductContextProps);
const {Provider} = ProductContext;

export const ProductCard = ({product, children, className, style, onChange, value}: Props) => {
  const {counter, incrementBy} = useProduct({ onChange, product, value });
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
