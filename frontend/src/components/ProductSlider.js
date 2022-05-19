import { useState } from "react";
import Image from "react-bootstrap/esm/Image";
import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "react-bootstrap/esm/CarouselItem";
import slide1 from "../assests/intimidator/slide1.jpg";
import slide2 from "../assests/intimidator/slide2.jpg";
import slide3 from "../assests/intimidator/slide3.jpg";

function ProductSlider() {
  let slides = [slide1, slide2, slide3];

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel
        className="d-flex justify-content-center align-center"
        activeIndex={index}
        onSelect={handleSelect}
      >
        {slides.map((item) => {
          return (
            <CarouselItem className="d-flex justify-content-center align-center">
              <Image src={item} fluid />
            </CarouselItem>
          );
        })}
      </Carousel>
    </>
  );
}

export default ProductSlider;
