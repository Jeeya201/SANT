import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ContactButton from './ContactButton';
import { Link } from 'react-scroll';


function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src="/images/favicon.png" width="90" height="90" className='d-inline-block align-top' alt="favv" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link>
            <Link
  to="about-section" // Specify the ID of the target section
  smooth={true} // Enable smooth scrolling
  duration={500} // Set the duration of the scroll animation
  offset={-70} // Adjust the scroll offset if necessary
>
  About Us
</Link>
</Nav.Link>

<Nav.Link>
            <Link
  to="explore-section" // Specify the ID of the target section
  smooth={true} // Enable smooth scrolling
  duration={500} // Set the duration of the scroll animation
  offset={-70} // Adjust the scroll offset if necessary
>
  Services
</Link>
</Nav.Link>            
<Nav.Link>
            <Link
  to="projects-section" // Specify the ID of the target section
  smooth={true} // Enable smooth scrolling
  duration={500} // Set the duration of the scroll animation
  offset={-70} // Adjust the scroll offset if necessary
>
  Projects
</Link>
</Nav.Link>
</Nav>

<Link
  to="contact-section" // Specify the ID of the target section
  smooth={true} // Enable smooth scrolling
  duration={500} // Set the duration of the scroll animation
  offset={-70} // Adjust the scroll offset if necessary
>
 <ContactButton/>
</Link>

           
        </Container>

      </Navbar>
    </>
  );
}

export default ColorSchemesExample;