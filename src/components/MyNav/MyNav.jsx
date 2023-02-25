import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import React from "react";
import './MyNav.css'
import { NavLink} from 'react-router-dom';
import { useState, useEffect } from 'react';
import navproducts from './navproducts';

const MyNav = () => {

  const [mode , setMode] = useState(localStorage.getItem('mode') || 'dark');
  const [lang, setLang] = useState(localStorage.getItem('lang'))

  useEffect(() => {
    // console.log(localStorage.getItem('mode'))
    document.body.className = mode;
    
  }, [mode]);

  // useEffect(() => {
    
    
  // }, [lang]);

  return (
    <>
      {['xxl'].map((expand) => (
        <Navbar key={expand} bg="white" id='navbar' expand={expand} className="mt-5">
          <Container fluid>
            <Navbar.Toggle id='toggle' aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Brand href="\" id='nav_brand' className='mx-auto'>
              <img src="https://themes.estudiopatagon.com/wordpress/groovy/wp-content/uploads/2022/11/logo-groovy.png" alt="err" width={170} height={45} />
            </Navbar.Brand>
            
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Body>
                <Nav className="nav_item fs-6 mx-auto ">

                  {
                   localStorage.getItem('lang') === 'en' ? navproducts.en.map(item => (
                      <NavLink  className='item mx-2' to="/">{item.title}</NavLink>
                    )): navproducts.az.map(item => (
                    <NavLink  className='item mx-2' to="/">{item.title}</NavLink>
                  ))}
                {/*                    
                  <Nav.Link className='item mx-2' href="\">Header Styles</Nav.Link>
                  <Nav.Link className='item mx-2' href="\">Post Features</Nav.Link>
                  <Nav.Link className='item mx-2' href="\">#Tag</Nav.Link>
                  <Nav.Link className='item mx-2' href="\">Author</Nav.Link>
                  <Nav.Link className='item mx-2' href="\">Features</Nav.Link>
                  <Nav.Link className='item mx-2' href="\">Contact</Nav.Link> */}
                  
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
              <Nav.Item className='me-4' id='magnifying_glass_parent' ><i id='magnifying_glass' className="fa-solid fa-magnifying-glass "></i></Nav.Item>

              <Button

               onClick={() => 
                localStorage.getItem('mode') === 'light' ? setMode('dark', localStorage.setItem('mode', 'dark')) 
                : setMode('light', localStorage.setItem('mode', 'light'))
              } 
               className='mx-1'><i className="fa-solid fa-lightbulb "></i>
              </Button>

              <Button
              onClick={() => localStorage.getItem('lang') === 'en' ? setLang('az', localStorage.setItem('lang', 'az')) : setLang('en', localStorage.setItem('lang', 'en')) }
              className='mx-1'><i className="fa-solid fa-language"></i>
              </Button>

              <NavLink to='/login'><i className="login_icon fa-solid fa-right-to-bracket"></i></NavLink>
              <Nav className='mx-3'>
              <i className="icon fa-brands fa-facebook" id='facebook'></i>
              <i className="icon fa-brands fa-twitter" id='twitter'></i>
              <i className="icon fa-brands fa-instagram" id='instagram'></i>
              <i className="icon fa-solid fa-rss" id='rss'></i>
              </Nav>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default MyNav