import Carousel from "react-bootstrap/Carousel";
import React from "react";

export default function MovieCarousel() {
  return (
    <>
      <div className="slider" >
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://wallpaperaccess.com/full/37958.jpg"
              alt="First slide"
              height="600"
            />

          </Carousel.Item>

          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="./images/slider1.jpg"
              alt="First slide"
              height="600"
            />
          </Carousel.Item>

          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="./images/slider3.jpg"
              alt="First slide"
              height="600"
            />
          </Carousel.Item>

          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="./images/slider4.jpg"
              alt="First slide"
              height="600"
            />
          </Carousel.Item>

          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://wallpapercave.com/dwp2x/wp5959662.jpg"

              alt="First slide"
              height="600"
            />
          </Carousel.Item>

          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://wallpaperaccess.com/full/34916.jpg"
              alt="First slide"
              height="600"
            />
          </Carousel.Item>

          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://wallpaperaccess.com/full/37943.jpg"
              alt="First slide"
              height="600"
            />
          </Carousel.Item>

        </Carousel>
        <br />
      </div>
    </>

  );
}
