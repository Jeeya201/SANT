import React,{useState,useEffect} from 'react'
import './About.css';
import ExploreButton from './ExploreButton';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;

      // You can adjust the threshold value (30 in this example) to control when the content starts fading in
      if (scrollPercentage > 42) {
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
    <section id="about-section">
  {/* Content of the About Us section */}

    <div className={isVisible ? 'fade-in visible' : 'fade-in'}>
      <div class="responsive-container-block bigContainer">
  <div class="responsive-container-block Container">
    <div class="imgContainer">
      <img class="mainImg" src="/images/7.png" alt="aboutus"/>
    </div>
    <div class="responsive-container-block textSide">
      <p class="text-blk heading">
        About Us
      </p>
      <p class="text-blk subHeading">
      SHAMS AL NOOR TECNOLOGIES S.P.C., SANT is one of the specialized approved contractor in supply & application Fire Stop, Diamond Coring & Cutting, Integrated Floor System, Fire Proofing, Concrete Repair and Protection Technologies, GRP Lining, and Water Proofing in OMAN. SANT is a team of professionals with a flexible service offering catered towards the oil field, residential, industrial and commercial sectors. We at SANT are qualified and experienced professionals able to provide an array of services to accommodate projects of all shapes and sizes. We are equipped with the latest machineries, technology and tools to ensure we are delivering first-rate outcomes for clients.
      SHAMS AL NOOR TECNOLOGIES is an Approved Applicator, SANT and world renowned manufacturers for the related products and Construction Chemicals work together as partners to provide best service together to their esteemed clients. The company has strength of highly skilled professionals including Engineers, Project coordinators, QA/QC, site Engineers, Site Supervisors, & Technicians.

      </p>
      {/* <a> */}
        <ExploreButton/>
      {/* </a> */}
    </div>
    {/* </div> */}
  </div>
</div>
    </div>
    </section>

  )
}
