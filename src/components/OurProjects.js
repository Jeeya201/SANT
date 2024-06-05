import React, { useEffect, useState } from 'react';
import './OurProjects.css';
import Projects from './Projects';

export default function OurProjects() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;

      // You can adjust the threshold value (75 in this example) to control when the content starts fading in
      if (scrollPercentage > 75) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="projects-section">

    <div>
      <div className={isVisible ? 'containerr arrive-visible' : 'containerr'}>

        <div className="containerr_content">
          <div className="containerr_content_inner">
            <div className="title">
              <h1>MAJOR CLIENTS</h1>
            </div>
            <div className="par">
              <p>
                Besides is a LIST OF OUR MAJOR CLIENTS
              </p>
            </div>
          </div>
        </div>
        {/* <div className="containerr_outer_img"> */}
          <div className="container_img">
            <Projects/>
          </div>
        {/* </div> */}
      </div>
      <div className="overlay"></div>
    </div>
    </section>
  );
}
