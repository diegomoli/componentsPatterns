import { ReactElement } from 'react';
import { PropsCard as ProductCardProps } from '../components/ProductCard';
import { PropsTitle } from '../components/ProductTitle';
import { PropsImage } from '../components/ProductImage';
import { PropsButtons } from '../components/ProductButtons';



export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  product: Product;
  counter: number;
  increaseBy: (value: number) => void;
}
  
  export interface ProductCardCompProps {
    ({ children, product }: ProductCardProps): JSX.Element;
    Title: (Props: PropsTitle)=> JSX.Element;
    Image: (Props: PropsImage) => JSX.Element;
    Buttons: ({ className }: PropsButtons)=> JSX.Element;
      
}
export interface onChangeArgs {
  product: Product;
  count: number;
}
  
export interface ProductInCart extends Product {
  count: number;
}