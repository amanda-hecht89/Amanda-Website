import React from 'react';
import { Paper } from '@mui/material';

export default function Item({ item })
{
  return (
    <Paper>
      <h2>{item.title}</h2>
      <img src={item.image} alt={item.image}/>

      {/* <Button className="CheckButton">
                Check it out!
      </Button> */}
    </Paper>
  );
}
