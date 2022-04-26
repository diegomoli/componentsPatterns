import { ProductCard, ProductImage, ProductButtons } from "../components";
import "../styles/custom-styles.css";
import { products } from "../components/data/product";
import { useShoppingCart } from "../hooks/useShoppingCart";

export const ShoppingPage = () => {
  const { onProductCountChange, shoppingCart } = useShoppingCart();

  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {products.map((p) => (
          <ProductCard
            product={p}
            className="bg-dark text-white"
            key={p.id}
            onChange={onProductCountChange}
            value={shoppingCart[p.id]?.count || 0}
          >
            <ProductImage className="custom-image" />

            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            key={key}
            product={product}
            className="bg-dark text-white"
            style={{ width: "100px" }}
            onChange={onProductCountChange}
            value={product.count}
          >
            <ProductImage className="custom-image" />
            <ProductButtons
              className="custom-buttons"
              style={{ display: "flex", justifyContent: "center" }}
            />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
