import React from 'react';

export default function Toggle({ toggle }) {
  return <div className="{toggle ? '1' : '2'}">
    {
      toggle
        ? <img src="./Images/arya1.JPG" width='200px'></img>
        : <img src="./Images/boulder1.JPG" width='200px'></img>
    }
  </div>;
}
