import React ,{useEffect}from 'react';
import './Projects.css';

export default function Projects() {
// In HTML, .display-area has the width of 4 Projs = 880px. Each Proj is 200px width and margin set to 10px.
// .display-area has a .Projs-wrapper which contains all the Projs. .Projs-wrapper is set to display flex.
// .display-area has overflow hidden to hide the portion of Projs-wrapper which extends beyond the container's width.
useEffect(() => {
  // Move the code that references the wrapper inside the useEffect hook.
  const wrapper = document.querySelector('.Projs-wrapper');
  if (!wrapper) return; // Ensure that the wrapper exists before proceeding.
  
  const dots = document.querySelectorAll('.dot');
  let activeDotNum = 0;

  dots.forEach((dot, idx) => {
    dot.setAttribute('data-num', idx);
    dot.addEventListener('click', (e) => {
      let clickedDotNum = e.target.dataset.num;
      if(clickedDotNum === activeDotNum) {
        return;
      } else {
        let displayArea = wrapper.parentElement.clientWidth;
        let pixels = -displayArea * clickedDotNum;
        wrapper.style.transform = 'translateX('+ pixels + 'px)';
        dots[activeDotNum].classList.remove('active');
        dots[clickedDotNum].classList.add('active');
        activeDotNum = clickedDotNum;
      }
    });
  });
}, []);

  return (
    <div class="Project">
      
      <div class="display-area">
  <div class="Projs-wrapper">
    
    <div class="Proj"><img src="/images/24.avif" alt="" height="200px" width="200px"/></div>
    <div class="Proj"><img src="/images/25.jpg" alt="" height="200px" width="200px"/></div> 
    <div class="Proj"><img src="/images/39.jpg" alt="" height="200px" width="200px"/></div> 
    <div class="Proj"><img src="/images/40.jpg" alt="" height="200px" width="200px"/></div>
    <div class="Proj"><img src="/images/26.png" alt="" height="200px" width="200px"/></div>
    <div class="Proj"><img src="/images/27.jpg" alt="" height="200px" width="200px"/></div>
    <div class="Proj"><img src="/images/28.jpg" alt="" height="200px" width="200px"/></div>
    <div class="Proj"><img src="/images/30.jpg" alt="" height="200px" width="200px"/></div>
    <div class="Proj"><img src="/images/31.jpg" alt="" height="200px" width="200px"/></div>
    <div class="Proj"><img src="/images/32.png" alt="" height="200px" width="200px"/></div>
    <div class="Proj"><img src="/images/34.jpg" alt="" height="200px" width="200px"/></div>
    <div class="Proj"><img src="/images/35.jpg" alt="" height="200px" width="200px"/></div>
    <div class="Proj"><img src="/images/36.jpg" alt="" height="200px" width="200px"/></div>
    <div class="Proj"><img src="/images/37.jpg" alt="" height="200px" width="200px"/></div>
    <div class="Proj"><img src="/images/38.jpg" alt="" height="200px" width="200px"/></div>
    <div class="Proj"><img src="/images/41.jpg" alt="" height="200px" width="150px"/></div>
    

  </div> 
</div>

<div class="dots-wrapper">
  <button class="dot active"></button>
  <button class="dot"></button>
  <button class="dot"></button>
  <button class="dot"></button>
</div>
      
    </div>
  )
}
