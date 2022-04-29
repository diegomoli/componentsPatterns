import { ReactElement } from 'react';
import { PropsCard as ProductCardProps } from '../components/ProductCard';
import { PropsTitle } from '../components/ProductTitle';
import { PropsImage } from '../components/ProductImage';
import { PropsButtons } from '../components/ProductButtons';
import ProductCard from '../components/index';



export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  product: Product;
  counter: number;
  maxCount?: number;
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
export interface InitialValues {
  count?: number;
  maxCount?: number;
}
export interface ProductCardHandlers {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: Product;

  increaseBy: (value: number) => void;
  reset: () => void;
}