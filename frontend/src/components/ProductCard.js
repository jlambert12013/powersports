import { useEffect, useState } from "react";

function ProductCard() {
  const loadProducts = async () => {
    await fetch("http://localhost:5000/api/catalog/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const [products, setProducts] = useState([]);

  return (
    <>
      {products.map((product) => {
        return <> {product.condition}</>;
      })}
    </>
  );
}

export default ProductCard;
