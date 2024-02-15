import React from 'react';
import '../styles/custom-styles.css';
import {ProductButtons, ProductCard, ProductImage, ProductTitle} from "../components";
import shoppingStyles from '../styles/shopping-page.module.css';
export const ShoppingPages = () => {
  const productWithNoImage = {
    id: '1',
    title: 'Coffee Mug - 1',
  }

  const productWithImage = {
    id: '2',
    title: 'Coffee Mug',
    image:'./coffee-mug.png'
  }

  return (
    <section className={ shoppingStyles.shopping }>
      <h1>Shopping Pages</h1>
      <hr/>
      <section className={ shoppingStyles.section }>

        <ProductCard product={ productWithImage }>
          <ProductImage/>
          <ProductTitle/>
          <ProductButtons/>
        </ProductCard>

        <ProductCard product={ productWithImage }>
          <ProductCard.Image/>
          <ProductCard.Title/>
          <ProductCard.Buttons/>
        </ProductCard>

      </section>
    </section>
  );
};

export default ShoppingPages;
