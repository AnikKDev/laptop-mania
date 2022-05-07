import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css';
const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    // handle log out
    const logout = () => {
        signOut(auth);
    };

    // active style
    const activeStyle = {
        color: "#DB2D2E"
    };
    return (
        <Navbar bg="" expand="lg" className="navigation-container">
            <Container>
                <Navbar.Brand as={Link} className="nav-title" to="/">Laptop <span className="text-danger">Mania</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto nav-links">
                        <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className="mx-3" to="/home">Home</NavLink>
                        <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className="mx-3" to="/about">About</NavLink>
                        <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className="mx-3" to="/blogs">Blogs</NavLink>
                        {user && <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className="mx-3" to="/my-items">My Items</NavLink>}
                        {user && <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className="mx-3" to="/manage-inventories">Manage Inventory</NavLink>}
                        {user && <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className="mx-3" to="/add-item">Add Items</NavLink>}
                        {user ? <button onClick={logout} className="btn btn-danger">Logout</button> : <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;