
import latest1 from './assets/latest/OceanBlue.jpg';
import latest2 from './assets/latest/Hotpink.jpg';
import latest3 from './assets/latest/Lightpink.jpg';
import latest4 from './assets/latest/Biege.jpg';
import latest5 from './assets/latest/Blue.jpg';
import latest6 from './assets/latest/Black.jpg';
import latest7 from './assets/latest/SandStone.jpg';
import latest8 from './assets/latest/Red.jpg';

import M1 from './assets/men/Biege.jpg';
import M2 from './assets/men/Black.jpg';
import M3 from './assets/men/Blue.jpg';
import M4 from './assets/men/Hotpink.jpg';
import M5 from './assets/men/Lightpink.jpg';
import M6 from './assets/men/OceanBlue.jpg';
import M7 from './assets/men/Purple.jpg';
import M8 from './assets/men/Red.jpg';
import M9 from './assets/men/SandStone.jpg';
import M10 from './assets/men/White.jpg';


import Biege from './assets/women/Biege.jpg';
import Black from './assets/women/Black.jpg';
import Blue from './assets/women/Blue.jpg';
import Hotpink from './assets/women/Hotpink.jpg';
import Lightpink from './assets/women/Lightpink.jpg';
import Oceanblue from './assets/women/OceanBlue.jpg';
import Purple from './assets/women/Purple.jpg';
import Red from './assets/women/Red.jpg';
import SandStone from './assets/women/SandStone.jpg';
import White from './assets/women/White.jpg';



import D1 from './assets/dress/1.jpg';
import D2 from './assets/dress/2.jpg';
import D3 from './assets/dress/3.jpg';
import D4 from './assets/dress/4.jpg';
import D5 from './assets/dress/5.jpg';
import D6 from './assets/dress/6.jpg';


const products = [
  // Latest products
  { id: 101, name: 'Ocean Blue', price: '2150', image: latest1, isLatest: true },
  { id: 102, name: 'Hot Pink', price: '2150', image: latest2, isLatest: true },
  { id: 103, name: 'Light Pink', price: '2150', image: latest3, isLatest: true },
  { id: 104, name: 'Biege', price: '2150', image: latest4, isLatest: true },
  { id: 105, name: 'Blue', price: '2150', image: latest5, isLatest: true },
  { id: 106, name: 'Black', price: '2150', image: latest6, isLatest: true },
  { id: 107, name: 'Sand Stone', price: '2150', image: latest7, isLatest: true },
  { id: 108, name: 'Red', price: '2150', image: latest8, isLatest: true },
  

  
  //Men Products

  { id: 31, name: 'Biege', price: '2150', image: M1, isMen: true },
  { id: 32, name: 'Black', price: '2150', image: M2, isMen: true },
  { id: 33, name: 'Blue', price: '2150', image: M3, isMen: true },
  { id: 34, name: 'Hotpink', price: '2150', image: M4, isMen: true },
  { id: 35, name: 'Lightpink', price: '2150', image: M5, isMen: true },
  { id: 36, name: 'OceanBlue', price: '2150', image: M6, isMen: true },
  { id: 37, name: 'Purple', price: '2150', image: M7, isMen: true },
  { id: 38, name: 'Red', price: '2150', image: M8, isMen: true },
  { id: 39, name: 'SandStone', price: '2150', image: M9, isMen: true },
  { id: 40, name: 'White', price: '2150', image: M10, isMen: true },


  //WoMen Products

  { id: 21, name: 'Biege', price: '2150', image:Biege, isWomen: true },
  { id: 22, name: 'Black', price: '2150', image:Black, isWomen: true },
  { id: 23, name: 'Blue', price: '2150', image:Blue, isWomen: true },
  { id: 24, name: 'Hotpink', price: '2150', image:Hotpink, isWomen: true },
  { id: 25, name: 'Lightpink', price: '2150', image:Lightpink, isWomen: true },
  { id: 26, name: 'Oceanblue', price: '2150', image:Oceanblue, isWomen: true },
  { id: 27, name: 'Purple', price: '2150', image:Purple, isWomen: true },
  { id: 28, name: 'Red', price: '2150', image:Red, isWomen: true },
  { id: 29, name: 'SandStone', price: '2150', image:SandStone, isWomen: true },
  { id: 30, name: 'White', price: '2150', image:White, isWomen: true },


  
  //Dresses Products

  { id: 111, name: 'D1', price: '3500', image: D1, isDress: true },
  { id: 222, name: 'D2', price: '3500', image: D2, isDress: true },
  { id: 333, name: 'D3', price: '3500', image: D3, isDress: true },
  { id: 444, name: 'D4', price: '3500', image: D4, isDress: true },
  { id: 555, name: 'D5', price: '3500', image: D5, isDress: true },


];




export default products;
