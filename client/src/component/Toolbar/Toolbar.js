import React from 'react';
import { NavLink } from 'react-router-dom';
import './Toolbar.css'

const toolbar = props => (
    <header className= "toolbar">
        <nav className= "toolbar_nav">
            <div></div>
            <div className= "toolbar_logo"><NavLink to="/">Topshot Hub</NavLink></div>
            <div clasName= "spacer" />
            <div className= "toolbar_nav_items">
                <ul>
                    <li><NavLink to="/account">Account</NavLink></li>
                    <li><NavLink to="/favorites">Favorites</NavLink></li>
                    <li><NavLink to="/new">New</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;
