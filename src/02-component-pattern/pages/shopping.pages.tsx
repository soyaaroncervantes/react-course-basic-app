import React from 'react';
import {ProductImage, ProductTitle, ProductButtons, ProductCard} from "../components";
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

        <ProductCard product={ productWithImage } className="[ bg-dark ] [ text-white ]">
          <ProductImage className="custom--img"/>
          <ProductTitle />
          <ProductButtons className="[ custom--buttons ]"/>
        </ProductCard>
      </div>
    </div>
  );
};

export default ShoppingPages;
