import React from 'react';
import { Navbar, Nav, Form, Button, FormControl, NavDropdown, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './images/Sifter-Logo.png';

const Header = () => {
	return (
		<Navbar bg="light" expand="lg" className="fixed-top navbar-light">
			<div className="container">
				<Link className="navbar-brand" to="/">
					<Image src={logo} className="logo-image" />
				</Link>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">
						<Link className="nav-link" to="/tweet/search">
							Search
						</Link>
						<Link className="nav-link" to="/tweet/favorites">
							Trending
						</Link>
					</Nav>
				</Navbar.Collapse>
			</div>
		</Navbar>
	);
};

export default Header;
