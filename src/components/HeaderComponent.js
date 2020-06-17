import React, { Component } from 'react';
import { Nav, Navbar, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false,
        };
    }
    toggleNav() {
        return (
            this.setState({
                isNavOpen: !this.state.isNavOpen
            })
        );
    }

    render() {
        return (
            <React.Fragment >
                <Jumbotron fluid className="justify-content-start">
                    <div className="container">
                        <div className="row ">
                            <div className="col md-1">
                                <img src="../assets/images/cropped-50ui.png" alt="50ui" width="25%" />
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Navbar light sticky="top" expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        Home
                                        </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/adventure">
                                        Adventure
                                        </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/wellness">
                                        Health & Wellness
                                        </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;