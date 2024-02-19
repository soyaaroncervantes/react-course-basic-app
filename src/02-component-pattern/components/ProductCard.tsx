import {createContext, CSSProperties, ReactElement} from 'react';
import styleModule from '../styles/styles.module.css';
import {useProduct} from "../hooks";
import {InitialValuesProductCard, OnChangeArgs, Product, ProductCardHandlers, ProductContextProps} from "../type";


export type Props = {
  product: Product;
  // children?: ReactElement | ReactElement[];
  children: (args: ProductCardHandlers) => ReactElement;
  className?: string;
  style?: CSSProperties;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
  initialValues?: InitialValuesProductCard;
}

export const ProductContext = createContext<ProductContextProps>({} as ProductContextProps);
const {Provider} = ProductContext;

export const ProductCard = ({product, children, className, style, onChange, value, initialValues}: Props) => {
  const {counter, incrementBy, isMaxCountReached, reset} = useProduct({onChange, product, value, initialValues});
  return (
    <Provider value={{product, counter, incrementBy, maxCount: initialValues?.maxCount}}>
      <article
        style={style}
        className={`${styleModule.productCard} ${className}`}>
        {
          children({
            count: counter,
            isMaxCountReached,
            maxCount: initialValues?.maxCount,
            increaseBy: incrementBy,
            product,
            reset
          })
        }
      </article>
    </Provider>
  );
};
