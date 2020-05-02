import React from 'react';
import {Navbar ,NavbarBrand} from 'reactstrap';
import { Container} from 'reactstrap';
import {NavLink} from 'react-router-dom';

import './header.scss';
const Header = () => {
  return (
    <header>
        <Navbar className='navbar'>
          <Container>
          <NavbarBrand className='navbar-brand' to="/">Football</NavbarBrand>
            <ul className='list-unstyled'>
            <li> <NavLink exact className='nav-item' to="/">Home</NavLink></li>
            {/* <li> <NavLink className='nav-item' to="/Leagues">Leagues</NavLink></li>
              <li><NavLink className='nav-item' to="/teams">teams</NavLink></li> */}
            </ul>
          </Container>
        </Navbar>
    </header>
  );
}

export default Header;