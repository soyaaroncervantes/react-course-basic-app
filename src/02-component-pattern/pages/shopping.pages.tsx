import React from 'react';
import {ProductCard} from "../components";

import {Products} from "../data/products";

import shoppingStyles from '../styles/shopping-page.module.css';
import stylesModules from '../styles/styles.module.css';
import '../styles/custom-styles.css';

const product = Products[0];
export const ShoppingPages = () => {
  return (
    <div className={shoppingStyles.shopping}>
      <main className={shoppingStyles.content}>
        <header>
          <h1>Shopping Pages</h1>
        </header>
        <hr/>
        <article className={shoppingStyles.articles}>
          <ProductCard
            className="card-dark"
            initialValues={{
              count: 4,
              maxCount: 7,
            }}
            key={product.id}
            product={product}>
            {({ reset, increaseBy, count, isMaxCountReached, maxCount }) => (
              <>
                <ProductCard.Image className="image-rounded"/>
                <ProductCard.Title/>
                <ProductCard.Buttons/>
                <button onClick={ reset }>Reset</button>
                <div className={ stylesModules.buttonsContainer }>
                  <button onClick={ () => increaseBy(-2) } className={ stylesModules.buttonMinus }>-2</button>
                  <p>{ count } - { maxCount }</p>
                  {(!isMaxCountReached &&
                    <button
                      onClick={() => increaseBy(2)}
                      className={stylesModules.buttonAdd}>+2</button>
                  )}
                </div>
              </>
            )}
          </ProductCard>
        </article>
      </main>
    </div>
  );
}


export default ShoppingPages;
