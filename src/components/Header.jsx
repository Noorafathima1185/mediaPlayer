import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <Navbar className="bg-transparent border border-secondary">
        <Container>
          <Navbar.Brand className='text-warning'>
          <FontAwesomeIcon icon={faVideo} beat size='xl' style={{color: "#fe8f34",}} />
            <span className='fs-5 ms-3'>Media Player</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Header