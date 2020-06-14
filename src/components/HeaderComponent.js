import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
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
                <Jumbotron fluid >
                    <div className="container">
                        <div className="row">
                            <div className="col md-12 logo">
                                <img src="../assets/images/cropped-50ui.png" alt="50ui" width="25%"/>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        );
    }
}

export default Header;