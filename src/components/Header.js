import { useState } from 'react';
import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import UserLoginForm from '../features/user/UserLoginForm';
import BCFMCLogo from '../app/assets/img/logo.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <Navbar dark color='primary' expand='xl'>
            <NavbarBrand href='/' >
                <img src={BCFMCLogo} alt='BCFMC logo' className='float-start' />
                <h1 className='site-heading my-auto'>
                    <span className='site-heading-upper'>Bayou City Federated Music Club</span>
                    <span className='site-heading-lower'>Gold Cup Festival</span>
                </h1>
            </NavbarBrand>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto' navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            <i className='fa fa-home fa-lg' /> Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/about'>
                            <i className='fa fa-list fa-lg' /> About
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/calendar'>
                            <i className='fa fa-calendar fa-lg' /> Calendar
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/entry'>
                            <i className='fa fa-address-card fa-lg' /> Entry
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/cart'>
                            <i className='fa fa-shopping-cart fa-lg' /> Cart
                        </NavLink>
                    </NavItem>
                </Nav>
                <UserLoginForm />
            </Collapse>
        </Navbar >
    );
}

export default Header;