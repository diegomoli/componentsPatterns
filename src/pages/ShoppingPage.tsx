import { ProductCard, ProductImage, ProductButtons } from "../components";
import "../styles/custom-styles.css";
import { products } from "../components/data/product";
import { ProductTitle } from "../components/ProductTitle";
import styles from "../styles/styles.module.css";

const product = products[0];
export const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />

      <ProductCard
        key={product.id}
        product={product}
        className="bg-dark text-white"
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({ reset, count, increaseBy, isMaxCountReached, maxCount }) => (
          <>
            <ProductImage className="custom-image" />
            <ProductTitle className="text-bold" />
            <ProductButtons className="custom-buttons" />
            <button onClick={() => increaseBy(-2)}>-2</button>
            <button onClick={reset}>Reset</button>
            {!isMaxCountReached && (
              <button onClick={() => increaseBy(+2)}>+2</button>
            )}
            <br />
            <span>
              {count} - {maxCount}
            </span>
          </>
        )}
      </ProductCard>
    </div>
  );
};
