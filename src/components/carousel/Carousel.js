import Carousel from 'react-bootstrap/Carousel';
import "./Carousel.css";
import home_image1 from "../../assets/home_image1.png"
import home_image2 from "../../assets/home_image2.png"
import home_image3 from "../../assets/home_image3.png"

const CarouselFade = () => {
  return (
    <Carousel fade className="carousel">
      <Carousel.Item className="carouselItem">
        <img
          className="d-block w-100 carouselImg"
          src={home_image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carouselItem">
        <img
          className="d-block w-100 carouselImg"
          src={home_image2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carouselItem">
        <img
          className="d-block w-100 carouselImg"
          src={home_image3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;