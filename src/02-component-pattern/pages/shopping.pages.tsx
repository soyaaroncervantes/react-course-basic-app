import React from 'react';
import {ProductButtons, ProductCard, ProductImage} from "../components";

import {Products} from "../data/products";

import shoppingStyles from '../styles/shopping-page.module.css';
import '../styles/custom-styles.css';
const product = Products[0];

return (
  <div className={shoppingStyles.shopping}>
    <main className={shoppingStyles.content}>
      <header>
        <h1>Shopping Pages</h1>
      </header>
      <hr/>
      <article className={shoppingStyles.articles}>
        <ProductCard
          key={product.id}
          className="card-dark"
          product={product}>
          <ProductCard.Image className="image-rounded"/>
          <ProductCard.Title/>
          <ProductCard.Buttons/>
        </ProductCard>
      </article>
    </main>
  </div>
);
}


export default ShoppingPages;
