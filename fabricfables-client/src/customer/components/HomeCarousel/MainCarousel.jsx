import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { mainCarouselData } from "./MainCarouselData";

const MainCarousel = () => {
  const items = mainCarouselData.map((item) => (
    <img
      className="cursor-pointer"
      src={item.image}
      role="presentation"
      alt=""
    />
  ));
  return (
    <AliceCarousel
      items={items}
      disableButtonsControls
      autoPlay
      autoPlayInterval={2500}
      infinite
    />
  );
};

export default MainCarousel;
