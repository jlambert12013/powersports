import { useState, useEffect } from "react";
import ProductSlider from "../components/ProductSlider";
import Intimidator from "../components/Intimidator";

function Home() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    await fetch("http://localhost:5000/api/catalog")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <ProductSlider />
      <Intimidator />
      {products.map((product) => {
        return <>{product.model} </>;
      })}
    </>
  );
}
export default Home;
