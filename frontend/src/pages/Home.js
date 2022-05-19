import { useState, useEffect } from "react";
import ProductSlider from "../components/ProductSlider";
import Intimidator from "../components/Intimidator";

function Home() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    await fetch("http://localhost:5000/api/catalog")
      .then((res) => res.json())
      .then((data) => data);
  };

  useEffect(() => {
    fetchProducts();
    setProducts();
  }, []);

  return (
    <>
      <ProductSlider />
      <Intimidator />
    </>
  );
}
export default Home;
