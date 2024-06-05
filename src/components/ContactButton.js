import React from 'react'
import './ContactButton.css';

export default function Button() {
  return (
    <div>
      <div class="container">
    <div class="center">
      <button class="btn">
        <svg width="150px" height="60px" viewBox="0 0 180 60" class="border">
          <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
          <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
        </svg>
        <span>Contact Us</span>
      </button>
    </div>
  </div>
    </div>
  )
}
