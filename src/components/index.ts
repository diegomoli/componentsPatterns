// export { ProductCard } from './ProductCard';
import { ProductCard as ProductCardComponents } from './ProductCard';
import { ProductButtons } from './ProductButtons';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';
import { ProductCardCompProps } from '../interfaces/interface';

export { ProductButtons } from './ProductButtons';
export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';

export const ProductCard: ProductCardCompProps = Object.assign(ProductCardComponents, {
    Title: ProductTitle,
    Image:ProductImage,
    Buttons: ProductButtons
    
})
export default ProductCard