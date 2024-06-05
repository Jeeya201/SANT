import React from 'react'
import './ExploreButton.css';
import { Link } from 'react-scroll';


export default function ExploreButton() {
  return (
    <div>
      <button class="expbtn">
      <Link
  to="explore-section" // Specify the ID of the target section
  smooth={true} // Enable smooth scrolling
  duration={500} // Set the duration of the scroll animation
  offset={-70} // Adjust the scroll offset if necessary
>
Explore our Services
</Link>
</button>
    </div>
  )
}
