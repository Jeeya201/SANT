import React,{useState,useEffect} from 'react'
import './ExploreServices.css';
// import Card from './Card';
import Card2 from './Card2';


export default function Features() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;

      // You can adjust the threshold value (30 in this example) to control when the content starts fading in
      if (scrollPercentage >63) {
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
    <section id="explore-section">
          <div>
        <div class="rcb bigContainer">
  <div class="rcb Container">
  
    <div class="rcb leftSide">
    <div className={isVisible ? 'fadee-in visible' : 'fadee-in'}>
      <p class="text heading">
      OUR SPECIALIZATION
      </p>
      <p class="text subHeading">
      Quality Policy : To achieve a “Zero tolerance Firestop, Fireproofing, Waterproofing, GRP Lining installations, Concrete Repair work and Diamond Core Cutting” by suitable systems selection, materials, and installation methods to provide safety for life and property in most Economical and efficient manner, and hence achieve the customer satisfaction.
      </p>
    </div>
    </div>
<div style={{ display: 'flex', flexDirection: 'column', alignItems:'flex-end' }}>
        <div style={{ display: 'flex', marginBottom: '60px' }}>
        <div style={{ marginRight: '60px' }}>
          <Card2 imgSrc="/images/1.jpg" heading=" I.	Fire Stop Applications" para="We are in to application of Passive Fire stop protection system made up of various components and used to seal openings and joints in a fire- resistance-rated wall or floor assembly."/>
       </div> 
        <div>
          <Card2 imgSrc="/images/2.png" heading="II.	Control Demolition/Diamond Coring & Cutting " para="Concrete coring and cutting by latest technology using electric, hydraulic or pneumatic machines to cut extremely accurate with no dust or vibration for a wide variety of applications." />
        </div>
      </div>
    <div style={{ display: 'flex' }}>
        <div style={{ marginRight: '60px' }}>
        <Card2 imgSrc="/images/6.jpg" heading="Fireproofing" para="We are in to application of Passive Fire Protection coatings “Cementitious and Intumescent” fireproofing to counter Hydrocarbon and Cellulosic fires. "/>
        </div>
        <div>
        <Card2 imgSrc="/images/3.jpg" heading="Integrated Floor System" para="A support structure solution for different types of equipment, cable trays and floor slabs. The integrated floor support is an added value in control rooms with raised floors
"/>
        </div>
      </div>
    </div>  </div>
</div>
</div>
</section>

  )
}
