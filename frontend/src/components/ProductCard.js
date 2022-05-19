import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function ProductCard() {
  const loadCatalog = async () => {
    await fetch("http://localhost:5000/api/catalog/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    loadCatalog();
  }, []);

  const [products, setProducts] = useState([]);

  return (
    <>
      <Row xs={1} md={2} className="g-4 px-5">
        {products.map((product) => {
          return (
            <>
              <Col>
                <Card>
                  <Card.Body>
                    <Card.Title>
                      {product.manufacturer + " " + product.model}
                    </Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </>
          );
        })}
      </Row>
    </>
  );
}

export default ProductCard;
