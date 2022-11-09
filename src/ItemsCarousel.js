import React from 'react';
import { Paper } from '@mui/material';
import './Carousel.css';

export default function Item({ item })
{
  return (
    <Paper>
      <div className='page'>
        <div className='component'>
          <div className='filler'>

            <div className='title'>
              <h2>{item.title}</h2>
            </div>
            <div className='comp'>
              <img className='projectPhotos' src={item.image} alt={item.image}/>
            </div>
            <div className='onent'>
              <p>{item.description}</p>
              <a href={item.link}>VIEW SITE</a>
            </div>
          </div>
        </div>
      </div>

      {/* <Button className="CheckButton">
                Check it out!
      </Button> */}
    </Paper>
  );
}
