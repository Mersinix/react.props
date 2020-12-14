import React, { Component } from 'react';



const Carousel = () =>{
    return ( 
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/img/parrain1.jpeg" className="d-block w-100" alt="..."/>
          </div>
        </div>
      </div>
        );
};

 
export default Carousel;

