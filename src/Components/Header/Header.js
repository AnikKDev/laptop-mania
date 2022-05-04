import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css';
const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    // handle log out
    const logout = () => {
        signOut(auth);
    };
    return (
        <Navbar bg="" expand="lg" className="navigation-container">
            <Container>
                <Navbar.Brand className="nav-title" href="#home">Laptop <span className="text-danger">Mania</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto nav-links">
                        <Nav.Link className="mx-2" as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link className="mx-2" as={Link} to="/about">About</Nav.Link>
                        <Nav.Link className="mx-2" as={Link} to="/blogs">Blogs</Nav.Link>
                        <Nav.Link className="mx-2" as={Link} to="/my-items">My Items</Nav.Link>
                        {user ? <button onClick={logout} className="btn btn-danger">Logout</button> : <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;