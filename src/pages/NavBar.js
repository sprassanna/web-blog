import React from 'react';
import { Link } from 'react-router-dom';
import articles  from '../data/content';

const NavBar = ()=>(
    <nav>
        <ul>
            <li>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/articles-list'>Article</Link>

            </li>
        </ul>
    </nav>
);

export default NavBar;