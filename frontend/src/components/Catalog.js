import { useEffect, useState } from "react";

function Catalog() {
  const [condition, setCondition] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const api = await fetch(`http://localhost:5000/api/catalog/`);
    const data = await api.json();
    console.log(data.condition);
    setCondition(data.condition);
  };

  return (
    <>
      {condition.map((cond) => {
        return <h3>{cond.condition}</h3>;
      })}
    </>
  );
}

export default Catalog;
