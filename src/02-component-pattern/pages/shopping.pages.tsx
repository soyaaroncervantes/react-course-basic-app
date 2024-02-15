import React from 'react';
import {ProductButtons, ProductCard, ProductImage, ProductTitle} from "../components";
import shoppingStyles from '../styles/shopping-page.module.css';
import '../styles/custom-styles.css';
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

        <ProductCard
          className="card-dark"
          product={ productWithImage }>
          <ProductImage className="image-rounded"/>
          <ProductTitle/>
          <ProductButtons className="buttons"/>
        </ProductCard>

        <ProductCard
          className="card-light"
          product={ productWithNoImage }>
          <ProductCard.Image className="image-rounded"/>
          <ProductCard.Title/>
          <ProductCard.Buttons/>
        </ProductCard>

      </section>
    </section>
  );
};

export default ShoppingPages;
