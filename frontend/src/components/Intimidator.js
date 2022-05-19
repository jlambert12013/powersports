import Image from "react-bootstrap/esm/Image";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import img1 from "../assests/intimidator-card1";
import img2 from "../assests/intimidator-card2";
import img3 from "../assests/intimidator-card3";

function Intimidator() {
  const images = [img1, img2, img3];
  return (
    <>
      <Container>
        <Row>
          {images.forEach((image) => {
            return (
              <Col>
                <Image src={image} fluid />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default Intimidator;
