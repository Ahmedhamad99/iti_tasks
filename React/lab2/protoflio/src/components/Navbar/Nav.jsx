import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Headnav=()=>{

    return (
        <>
         <Navbar bg="dark" data-bs-theme="dark" className='w-100'>
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link href="#hero">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#education">Education</Nav.Link>
          <Nav.Link href="#contacts">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
        </>
    )
}

export default Headnav;