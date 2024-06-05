import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigationbar  from './components/Navigationbar';
// import Cardd from './components/Hero';
import Hero from './components/Hero';
// import Card from './components/Card';
import ExploreServices from './components/ExploreServices';
import OurProjects from './components/OurProjects';
import Footerr from './components/Footerr';
// import Card  from './components/Card';

function App() {
  return (
    <div className="App">
      <Navigationbar/>
      <Hero/>
      <ExploreServices/>
      <OurProjects/>
      <Footerr/>
      {/* <Card/> */}
      {/* <Projects/> */}
      {/* <div style={{ display: 'flex', flexDirection: 'column', alignItems:'flex-end' }}>
        <div style={{ display: 'flex', marginBottom: '20px' }}>
        <div style={{ marginRight: '10px' }}>
          <Card />
       </div> 
        <div>
          <Card />
        </div>
      </div>
    <div style={{ display: 'flex' }}>
        <div style={{ marginRight: '10px' }}>
          <Card />
        </div>
        <div>
          <Card />
        </div>
      </div>
    </div> */}
    </div>
  );
}

export default App;