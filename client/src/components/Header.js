import React, { Component } from 'react';
import logo from '../logo.svg';
import { NavLink } from 'react-router-dom';
class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-top">
                <a className="navbar-brand" href="#">
                    <img src={logo} width="35" height="35" className="d-inline-block align-top" alt="" />
                    api-express-front
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link"> List </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/user/create" className="nav-link"> Create </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;
