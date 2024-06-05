import React, { useEffect } from 'react';
import './Hero.css';
import $ from 'jquery'; // Import jQuery library
import About from './About';
import TitleGlow from './TitleGlow';

export default function Hero() {
  useEffect(() => {
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      $(".zoom img").css({
        transform: 'translate3d(-50%, -'+(scroll/100)+'%, 0) scale('+(100 + scroll/5)/100+')',
      });
    });
  }, []); // Empty dependency array means this effect will only run once after the component mounts

  return (
    <div>
      <header className="zoom">
      <div style={{ position: 'relative' }}>
        <img src="/images/5.png" alt="hero"/>
        <div style={{ position: 'absolute', top: '10%', left: '75%', transform: 'translate(-50%, -50%)', zIndex: 1 }}>
        <TitleGlow />
      </div>
    </div>
      </header>
      <main role="main">
        <div className="content">
          {/* <h1>Zoom Hero Image on Scroll</h1>
          <a href="http://webdesignerwall.com/tutorials/how-to-add-icon-fonts-to-any-element-with-css" alt="webdesignerwall.com" target="_blank">View Tutorial</a>
          <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Maecenas sed diam eget risus varius blandit sit amet non magna. Nulla vitae elit libero, a pharetra augue. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
          <p>Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
          <footer>
            <p>A <a href="http://www.webdeisgnerwall.com" alt="web designer wall" target="_blank">webdesignerwall.com</a> Tutorial</p>
          </footer> */}
          <About/>
        </div>
      </main>
    </div>
  );
}
