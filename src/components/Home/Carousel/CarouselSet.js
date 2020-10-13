import React from 'react';
import carousel1 from '../../../images/carousel-1.png';
import carousel2 from '../../../images/carousel-2.png';
import carousel3 from '../../../images/carousel-3.png';
import carousel4 from '../../../images/carousel-4.png';
import carousel5 from '../../../images/carousel-5.png';
import {Carousel} from "react-bootstrap";
import './Carousel.css';



const CarouselSet = () => {
    return (
       <div className="carouselDesign">
           <div>
               <h1 className="mt-5" style={{fontWeight:'1000',color:'white',textAlign:'center'}}>Here are some of our <span style={{color:'green'}}>works</span></h1>
           </div>
           <div>
           <Carousel className="carouselImage  mb-5">
        <Carousel.Item>
          <img
            className="d-block w-100 p-5 "
            src={carousel1}
            alt="First slide"
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 p-5 "
            src={carousel2}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 p-5 "
            src={carousel3}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 p-5 "
            src={carousel4}
            alt="First slide"
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 p-5 "
            src={carousel5}
            alt="First slide"
          />
          
        </Carousel.Item>
      </Carousel>
           </div>
       </div>
    );
};

export default CarouselSet;