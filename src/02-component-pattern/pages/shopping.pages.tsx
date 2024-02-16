import React from 'react';
import {ProductButtons, ProductCard, ProductImage} from "../components";
import {useProductCart} from "../hooks";

import {Products} from "../data/products";

import shoppingStyles from '../styles/shopping-page.module.css';
import '../styles/custom-styles.css';


export const ShoppingPages = () => {
  const {shoppingCart, onProductCountChange} = useProductCart();

  return (
    <div className={shoppingStyles.shopping}>
      <main className={shoppingStyles.content}>
        <header>
          <h1>Shopping Pages</h1>
        </header>
        <hr/>
        <article className={shoppingStyles.articles}>
          {Products.map(product => (
            <ProductCard
              key={product.id}
              className="card-dark"
              onChange={onProductCountChange}
              value={shoppingCart.get(product.id)?.count ?? 0}
              product={product}>
              <ProductCard.Image className="image-rounded"/>
              <ProductCard.Title/>
              <ProductCard.Buttons/>
            </ProductCard>
          ))}
        </article>
      </main>
      <aside className={shoppingStyles.cart}>
        <h4>Cart</h4>
        {
          Array.from(shoppingCart.entries()).map(([id, product]) => (
            <ProductCard
              key={id}
              className="card-cart card-dark"
              onChange={onProductCountChange}
              value={product.count}
              product={product}>
              <ProductImage className="image-rounded"/>
              <ProductButtons/>
            </ProductCard>
          ))
        }
      </aside>
    </div>
  );
};

export default ShoppingPages;
