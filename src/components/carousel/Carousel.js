import React from "react";

const Carousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <div className="carousel">
      <div className="arrow" onClick={()=> handlClick("left")}></div>
      <div className="carouselWrapper">
        <div className="carouselItem">
          <div className="carouselImage"></div>
          <div className="carouselInfo"></div>
        </div>
      </div>
      <div className="arrow" onClick={()=> handlClick("right")}></div>
    </div>
  );
};

export default Carousel;
