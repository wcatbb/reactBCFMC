import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Col, Row, Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import UserLoginForm from '../features/user/UserLoginForm';
import BCFMCLogo from '../app/assets/img/logo.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const cart = useSelector((state) => state.cart.cart);
    
    const getTotalQuantity = () => {
        let total = 0
        cart.forEach(item => {
            total += item.quantity
        })
        return total
    }

    const emptyCart = (getTotalQuantity() === 0);
    console.log("empty:", emptyCart);

    return (
        <>
            <Row className='jumbotron'>
                <Col className='my-auto ms-auto col-sm-4 col-md-3 d-none d-md-block'>
                    <NavbarBrand href='/'>
                        <img src={BCFMCLogo} alt='BCFMC logo' />
                    </NavbarBrand>
                </Col>
                <Col className='my-auto'>
                    <h1 className='site-heading'>
                        <span className='site-heading-upper'>Bayou City Federated Music Club</span>
                        <span className='site-heading-lower'>Gold Cup Festival</span>
                    </h1>
                </Col>
            </Row>
            <Row>
                <Navbar dark color='primary' expand='md'>
                    <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
                    <Collapse isOpen={menuOpen} navbar>
                        <Nav className='mx-auto' navbar>
                            <NavItem>
                                <NavLink className='nav-link text-uppercase' to='/'>
                                    <i className='fa fa-home fa-2x' /> Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link text-uppercase' to='/about'>
                                    <i className='fa fa-list fa-2x' /> About
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link text-uppercase' to='/calendar'>
                                    <i className='fa fa-calendar fa-2x' /> Calendar
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link text-uppercase' to='/entry'>
                                    <i className='fa fa-address-card fa-2x' /> Entry
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link text-uppercase' to='/cart'>
                                {emptyCart ? <i className='fa fa-shopping-cart fa-2x' />
                                :<><i className='fa fa-shopping-cart fa-2x' />
                                <span class='badge badge-warning' id='lblCartCount'>{getTotalQuantity()}</span></>} Cart
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <UserLoginForm />
                    </Collapse>
                </Navbar >
            </Row>
        </>
    );
};

export default Header;