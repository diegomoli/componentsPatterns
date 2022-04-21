import { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import { isTemplateMiddleOrTemplateTail } from "typescript";

export interface PropsImage {
  className?: string;
  img?: string;
  style?: CSSProperties;
}

export const ProductImage = ({ img = "", className, style }: PropsImage) => {
  const { product } = useContext(ProductContext);
  let imgToShow: string;

  if (img) {
    imgToShow = img;
  } else if (product.img) {
    imgToShow = product.img;
  } else {
    imgToShow = noImage;
  }
  return (
    <img
      className={`${styles.productImg} ${className}`}
      style={style}
      src={imgToShow}
      alt="product"
    />
  );
};
