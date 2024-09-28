import product1 from './assets/products/1.jpg';
import product2 from './assets/products/2.jpg';
import product3 from './assets/products/3.jpg';
import product4 from './assets/products/4.jpg';
import product5 from './assets/products/5.jpg';
import product6 from './assets/products/6.jpg';
import product7 from './assets/products/7.jpg';
import product8 from './assets/products/8.jpg';
import product9 from './assets/products/9.jpg';
import product10 from './assets/products/10.jpg';
import product11 from './assets/products/11.jpg';
import product12 from './assets/products/12.jpg';

import latest1 from './assets/latest/Product1.jpg';
import latest2 from './assets/latest/Product2.jpg';
import latest3 from './assets/latest/Product3.jpg';
import latest4 from './assets/latest/Product4.jpg';
import latest5 from './assets/latest/Product5.jpg';
import latest6 from './assets/latest/Product6.jpg';
import latest7 from './assets/latest/Product7.jpg';
import latest8 from './assets/latest/Product8.jpg';

import M1 from './assets/men/m1.jpg';
import M2 from './assets/men/m2.jpg';
import M3 from './assets/men/m3.jpg';
import M4 from './assets/men/m4.jpg';
import M5 from './assets/men/m5.jpg';
import M6 from './assets/men/m6.jpg';
import M7 from './assets/men/m7.jpg';
import M8 from './assets/men/m8.jpg';


import W1 from './assets/women/1.jpg';
import W2 from './assets/women/2.jpg';
import W3 from './assets/women/3.jpg';
import W4 from './assets/women/4.jpg';
import W5 from './assets/women/5.jpg';
import W6 from './assets/women/6.jpg';
import W7 from './assets/women/7.jpg';
import W8 from './assets/women/8.jpg';

import D1 from './assets/dress/1.jpg';
import D2 from './assets/dress/2.jpg';
import D3 from './assets/dress/3.jpg';
import D4 from './assets/dress/4.jpg';
import D5 from './assets/dress/5.jpg';
import D6 from './assets/dress/6.jpg';


const products = [
  // Latest products
  { id: 101, name: 'Latest 1', price: '2600', image: latest1, isLatest: true },
  { id: 102, name: 'Latest 2', price: '1200', image: latest2, isLatest: true },
  { id: 103, name: 'Latest 3', price: '1700', image: latest3, isLatest: true },
  { id: 104, name: 'Latest 4', price: '1005', image: latest4, isLatest: true },
  { id: 105, name: 'Latest 5', price: '1000', image: latest5, isLatest: true },
  { id: 106, name: 'Latest 6', price: '1000', image: latest6, isLatest: true },
  { id: 107, name: 'Latest 7', price: '1000', image: latest7, isLatest: true },
  { id: 108, name: 'Latest 8', price: '1000', image: latest8, isLatest: true },
  
  // Regular products
  { id: 1, name: 'Product 1', price: '1000', image: product1, isLatest: false },
  { id: 2, name: 'Product 2', price: '1000', image: product2, isLatest: false },
  { id: 3, name: 'Product 3', price: '1000', image: product3, isLatest: false },
  { id: 4, name: 'Product 4', price: '1000', image: product4, isLatest: false },
  { id: 5, name: 'Product 5', price: '1000', image: product5, isLatest: false },
  { id: 6, name: 'Product 6', price: '1000', image: product6, isLatest: false },
  { id: 7, name: 'Product 7', price: '2000', image: product7, isLatest: false },
  { id: 8, name: 'Product 8', price: '1000', image: product8, isLatest: false },
  { id: 9, name: 'Product 9', price: '1000', image: product9, isLatest: false },
  { id: 10, name: 'Product 10', price: '1000', image: product10, isLatest: false },
  { id: 11, name: 'Product 11', price: '1000', image: product11, isLatest: false },
  { id: 12, name: 'Product 12', price: '1000', image: product12, isLatest: false },

  
  //Men Products

  { id: 31, name: 'M1', price: '1000', image: M1, isMen: true },
  { id: 32, name: 'M2', price: '1000', image: M2, isMen: true },
  { id: 33, name: 'M3', price: '1000', image: M3, isMen: true },
  { id: 34, name: 'M4', price: '1000', image: M4, isMen: true },
  { id: 35, name: 'M5', price: '1000', image: M5, isMen: true },
  { id: 36, name: 'M6', price: '1000', image: M6, isMen: true },
  { id: 37, name: 'M7', price: '2000', image: M7, isMen: true },
  { id: 38, name: 'M8', price: '1000', image: M8, isMen: true },


  //WoMen Products

  { id: 21, name: 'W1', price: '1000', image: W1, isWomen: true },
  { id: 22, name: 'W2', price: '1000', image: W2, isWomen: true },
  { id: 23, name: 'W3', price: '1000', image: W3, isWomen: true },
  { id: 24, name: 'W4', price: '1000', image: W4, isWomen: true },
  { id: 25, name: 'W5', price: '1000', image: W5, isWomen: true },
  { id: 26, name: 'W6', price: '1000', image: W6, isWomen: true },
  { id: 27, name: 'W7', price: '2000', image: W7, isWomen: true },
  { id: 28, name: 'W8', price: '1000', image: W8, isWomen: true },


  
  //Dresses Products

  { id: 111, name: 'D1', price: '1000', image: D1, isDress: true },
  { id: 222, name: 'D2', price: '1000', image: D2, isDress: true },
  { id: 333, name: 'D3', price: '1000', image: D3, isDress: true },
  { id: 444, name: 'D4', price: '1000', image: D4, isDress: true },
  { id: 555, name: 'D5', price: '1000', image: D5, isDress: true },


];




export default products;
