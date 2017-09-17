import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown,
    MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

const NavLink = ({ to, eventKey, children }) =>
    <LinkContainer to={to} eventKey={eventKey}>
        <NavItem>{children}</NavItem>
    </LinkContainer>;

const MenuLink = ({ to, eventKey, title }) =>
    <LinkContainer to={to} eventKey={eventKey}>
        <MenuItem>{title}</MenuItem>
    </LinkContainer>;

class NavHeader extends React.Component{
    render(){
        return(
            <Navbar fluid>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="./">Musio</Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavLink to="./" eventKey={1}>
                            Dashboard
                        </NavLink>
                        <NavLink to="./soso" eventKey={2}>
                            OSOSOSO
                        </NavLink>
                        <NavDropdown eventKey={3} title="Pro" id="basic-nav-dropdown">
                            <MenuLink to="/" title="AI" eventKey={3.1} />
                            <MenuLink to="/" title="Advisor" eventKey={3.2} />
                            <MenuLink to="/" title="Online-Eng" eventKey={3.3} />
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavLink to="/" eventKey={4}>
                            Upgrade to Pro
                        </NavLink>
                        <NavDropdown eventKey={5} title="John Smith" id="basic-nav-dropdown">
                            <MenuLink to="/profile" eventKey={5.1}>
                                Profile
                            </MenuLink>
                            <MenuLink to="/help" eventKey={5.2}>
                                Help
                            </MenuLink>
                            <MenuItem divider />
                            <MenuLink to="/account/logOut" eventKey={5.3}>Log Out</MenuLink>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavHeader;