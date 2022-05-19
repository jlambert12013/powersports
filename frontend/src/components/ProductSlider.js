import { useState } from "react";
import Image from "react-bootstrap/esm/Image";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import CarouselItem from "react-bootstrap/esm/CarouselItem";
import slide1 from "../assests/intimidator/slide-1.jpg";
import slide2 from "../assests/intimidator/slide-2.jpg";
import slide3 from "../assests/intimidator/slide-3.jpg";

function ProductSlider() {
  const arr = [slide1, slide2, slide3];

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {arr.map((item) => {
          return (
            <CarouselItem>
              <Image src={item} fluid />
            </CarouselItem>
          );
        })}
      </Carousel>
    </>
  );
}

export default ProductSlider;
