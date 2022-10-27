import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Item from './ItemsCarousel';
import slides from './helper/slides.json';

export default function ProjectCarousel()
{
  
  return (
    <Carousel>
      {
        slides.map(item => <Item key={item.id} item={item} />)
      }
    </Carousel>
  );
}
