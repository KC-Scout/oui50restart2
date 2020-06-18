import React, { Component } from 'react';
import { Nav, Navbar, NavbarToggler, Collapse, NavItem, Jumbotron, NavbarBrand } from 'reactstrap';
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
                <Jumbotron className="justify-content-start" fluid>
                    <div className="header container">
                        <div className="row justify-content-between">
                            <div className="col-md-5">
                                <img src="../assets/images/cropped-50ui.png" alt="50ui" />
                            </div>
                            <div className="col-md-2 icons">
                                <a className="btn btn-social-icon btn-twitter btn-light" href="http://twitter.com/oui_50"><i className="fa fa-twitter fa-lg" aria-hidden="true" /></a>{' '}
                                <a className="btn btn-social-icon btn-google btn-light" href="https://www.youtube.com/channel/UCEvkWG11yDDvEkwaUJbRIRg"><i className="fa fa-youtube" /></a>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Navbar className="bar" sticky="top" dark expand="md">
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
