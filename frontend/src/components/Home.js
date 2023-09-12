import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const Home = () => {
  return (
    <div className="carousel-container">
      <Carousel>
        <div>
          <img
            src="https://source.unsplash.com/random/1920x1080/?briyani,samosa"
            alt="Image 1"
            style={{ maxWidth: '100%' }}  // Adjusted style here
          />
          <p className="legend">"A recipe has no soul. You, as the cook, must bring soul to the recipe"</p>
        </div>
        <div>
          <img
            src="https://source.unsplash.com/random/1920x1080/?pasta,pizza,burger"
            alt="Image 2"
            style={{ maxWidth: '100%' }}  // Adjusted style here
          />
          <p className="legend">“Food brings people together on many different levels. It’s nourishment of the soul and body; it’s truly love.”</p>
        </div>
        <div>
          <img
            src="https://source.unsplash.com/random/1920x1080/?chocolates,cookies,donuts"
            alt="Image 3"
            style={{ maxWidth: '100%' }}  // Adjusted style here
          />
          <p className="legend">"Life is uncertain. Eat dessert first"</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Home;