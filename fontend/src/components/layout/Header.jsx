import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { IoIosCart } from 'react-icons/io';
import { BsFillPersonFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';



export default function Header() {
  return (
    <Navbar bg="dark px-4" variant='dark' expand="lg" collapseOnSelect>
        <Navbar.Brand>
          <Link className='nav-link' to='/'>ProShop</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to='/login'><Nav className='nav-link'><span className='px-1 text-lg'><IoIosCart/></span> Login</Nav></Link>
            <Link to='/signup'><Nav className='nav-link'><span className='px-1 text-lg'><BsFillPersonFill/></span> Signup</Nav></Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

