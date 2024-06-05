import React from 'react';
import './Card2.css';
export default function Card2({imgSrc,heading,para}) {
  return (
    <div>
      <div class="card2">
    <img src={imgSrc} alt="cardimg" />
    <h1>
      {heading}
    </h1>
    <p>
       {para}
    </p>
</div>
    </div>
  )
}
