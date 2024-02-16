import {Product} from "../type";

const productWithNoImage = {
  id: window.crypto.randomUUID().toString(),
  title: 'Coffee Mug - Card',
}
const productWithImage = {
  id: window.crypto.randomUUID().toString(),
  title: 'Coffee Mug',
  image: './coffee-mug.png'
}
const productWithImageAlt = {
  id: window.crypto.randomUUID().toString(),
  title: 'Coffee Mug - Meme',
  image: './coffee-mug-2.png'
}
export const Products: Product[] = [productWithImage, productWithImageAlt, productWithNoImage];
