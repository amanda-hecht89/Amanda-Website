import React from 'react';

export default function toggle({ toggle }) {
  return <div className="{toggle ? '1' : '2'}">
    {
      toggle
        ? <img></img>
        : <img></img>
    }
  </div>;
}
