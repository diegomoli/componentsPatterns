import { useProduct } from "../hooks/useProduct";
import { createContext, CSSProperties, ReactElement } from "react";
import {
  Product,
  ProductContextProps,
  onChangeArgs,
} from "../interfaces/interface";
import styles from "../styles/styles.module.css";

export interface PropsCard {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}
export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
}: PropsCard) => {
  const { counter, increaseBy } = useProduct({ onChange, product, value });
  return (
    <Provider value={{ product, counter, increaseBy }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};
