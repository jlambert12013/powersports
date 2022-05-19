import Image from "react-bootstrap/esm/Image";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import img1 from "../assests/intimidator/intimidator-card1.jpg";
import img2 from "../assests/intimidator/intimidator-card2.jpg";
import img3 from "../assests/intimidator/intimidator-card3.jpg";

function Intimidator() {
  let images = [img1, img2, img3];

  return (
    <>
      <Container fluid style={{ maxWidth: 2000 }}>
        <Row>
          {images.map((image) => {
            return (
              <Col md={4} className="g-4">
                <Image className="intimidator-img" src={image} fluid rounded />
              </Col>
            );
          })}
        </Row>
        <Row>
          <Col>
            <p>
              We are Intimidator. We strive to build the most comfortable,
              durable, and rugged UTV on the market. We build them at our
              headquarters in Batesville, Arkansas with our crew of hardworking
              employees. We include a large list of premium components and have
              a unit to fit any needs. Choose from our ever-growing list of
              accessories from our sister company Bad Dawg Accessories to create
              your custom Intimidator.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Intimidator;
