import React from 'react';
import {ProductImage, ProductTitle, ProductButtons, ProductCard} from "../components";

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
    <div>
      <h1>Shopping Page</h1>
      <hr />

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '2rem',
        flexWrap: 'wrap',
        padding: '2rem'
      }}>

        <ProductCard product={ productWithNoImage } >
          <ProductCard.Image />
          <ProductCard.Title/>
          <ProductCard.Buttons/>
        </ProductCard>

        <ProductCard product={ productWithImage } >
          <ProductImage />
          <ProductTitle/>
          <ProductButtons/>
        </ProductCard>
      </div>
    </div>
  );
};

export default ShoppingPages;
