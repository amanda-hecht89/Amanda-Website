import React from 'react';
import { Paper } from '@mui/material';
import './Carousel.css';

export default function Item({ item })
{
  return (
    <Paper>
      <div className='component'>
        <div className='comp'>
          <h2>{item.title}</h2>
          <img src={item.image} alt={item.image}/>
        </div>
        <div className='onent'>
          <p>{item.description}</p>
          <a href={item.url}>link here</a>
        </div>
      </div>

      {/* <Button className="CheckButton">
                Check it out!
      </Button> */}
    </Paper>
  );
}
