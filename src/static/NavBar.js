import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/NavBar.css';

function NavBar() {
    return (
        <div class="row" id="navContainer">

            <div class="col-12 col-sm-4">
                <img id="logo" src='/logo/BasicLogo.png' alt="Tristan Hamel Logo"></img>
            </div>

            <nav class="col-12 col-sm-4" id="nav">
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="active">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blogs" activeClassName="active">Blog</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" activeClassName="active">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" activeClassName="active">Contact</NavLink>
                    </li>
                </ul>
            </nav>

            <div class="col-12 col-sm-4" id="language">
                <p><b>EN</b>/FR</p>
            </div>

        </div>
    );
}

export default NavBar;
