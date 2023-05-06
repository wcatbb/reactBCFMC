import { useState } from 'react';
import { Container, Row, Col, Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
// import BCFMCLogo from '../app/assets/img/logo.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <Navbar dark color='primary' expand='xs'>
            <Container>
                <NavbarBrand className='ms-5' href='/' >
                    <Row>
                        {/* <Col>
                            <img src={BCFMCLogo} alt='BCFMC logo' className='float-start' />
                        </Col> */}
                        <Col>
                            <h1 class='site-heading my-auto'>
                                <span class='site-heading-upper'>Bayou City Federated Music Club</span>
                                <span class='site-heading-lower'>Gold Cup Festival</span>
                            </h1>
                        </Col>
                    </Row>
                </NavbarBrand>
                <Row>
                    <Col>
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
                            </Nav>
                        </Collapse>
                    </Col>
                </Row>
            </Container>
        </Navbar >
    );
}

export default Header;