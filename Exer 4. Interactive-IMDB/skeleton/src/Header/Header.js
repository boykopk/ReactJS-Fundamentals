import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        this.props.handleLogout();
    }

    render() {
        return (
            <header>
                <NavLink to="#" exact className="logo">Interactive IMDB</NavLink>
                <div className="header-right">
                    <NavLink exact to="/">Home</NavLink>
                    {
                        this.props.username ?
                            <span>
                                <NavLink to="#">Welcome {this.props.username}!</NavLink>
                                {
                                    this.props.isAdmin ?
                                        <span>
                                            <NavLink to="/create">Create</NavLink>
                                        </span> :
                                        null
                                }
                                <NavLink to="#" onClick={this.handleLogout}>Logout</NavLink>
                            </span> :
                            <span>
                                <NavLink to="/register">Register</NavLink>
                                <NavLink to="/login">Login</NavLink>
                            </span>
                    }
                </div>
            </header>
        );
    }
}

export default Header;