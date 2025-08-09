import helmets from './footballHelmatData';
import shoulderPads from './footballShoulderPadsData';
import facemasks from './footballfacemask';
import partsAccessories from './partsAccessories';

const allProducts = [
  ...helmets.products,
  ...shoulderPads.products,
  ...facemasks.products,
  ...partsAccessories.products,
];

export default allProducts;
