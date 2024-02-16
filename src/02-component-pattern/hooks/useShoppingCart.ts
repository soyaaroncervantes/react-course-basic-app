import {useState} from "react";
import {Product, ProductInCart} from "../type";


type ProductChangeArgs = {
  count: number;
  product: Product;
}

export const useProductCart = () => {
  const [shoppingCart, setShoppingCart] = useState<Map<string, ProductInCart>>(new Map());
  const onProductCountChange = ({count, product}: ProductChangeArgs) => {
    setShoppingCart(prev => {
      let productInCart = prev.get(product.id) ?? {count: 0, ...product};
      let updatedCart = new Map(prev);
      const updatedCount = Math.max(productInCart.count + count, 0);
      if (updatedCount > 0) {
        productInCart = { ...productInCart, count: updatedCount };
        updatedCart = updatedCart.set(product.id, productInCart);
        return updatedCart;
      }
      updatedCart.delete(product.id);
      return updatedCart;
    });
  }

  return {shoppingCart, onProductCountChange};

}
