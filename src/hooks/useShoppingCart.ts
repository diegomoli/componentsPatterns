import React, { useState } from 'react'
import { Product, ProductInCart } from '../interfaces/interface';

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

    const onProductCountChange = ({
        count,
        product,
    }: {
        count: number;
        product: Product;
    }) => {
        setShoppingCart((oldShoppingCart) => {
            const productInCart: ProductInCart = oldShoppingCart[product.id] || {
                ...product,
                count: 0,
            };

            //Si todo esto es mayor a cero es porque lo puedo incrementar
            if (Math.max(productInCart.count + count, 0) > 0) {
                productInCart.count += count;
                return {
                    ...oldShoppingCart,
                    [product.id]: productInCart,
                };
            }
            //Si el producto no existe o la sumatoria es negativo se elimina el carrito
            const { [product.id]: toDelete, ...rest } = oldShoppingCart;
            return rest;

            // if (count === 0) {
            //   const { [product.id]: toDelete, ...rest } = oldShoppingCart;
            //   return rest;
            // }
            // return {
            //   ...oldShoppingCart,
            //   [product.id]: { ...product, count },
            // };
        });
    }
      return{shoppingCart,onProductCountChange}
  }
