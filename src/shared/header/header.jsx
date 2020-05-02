import React from 'react';
import { Navbar } from 'reactstrap';
import { Container } from 'reactstrap';
import { NavLink } from 'react-router-dom';

import './header.scss';
const Header = () => {
	return (
		<header>
			<Navbar className='navbar'>
				<Container>
					<NavLink className='navbar-brand' to='/'>
						Football
					</NavLink>
					<ul className='list-unstyled'>
						<li>
							<NavLink exact className='nav-item' to='/'>
								Home
							</NavLink>
						</li>
					</ul>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
