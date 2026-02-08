import React from 'react';
import {Link} from "react-router-dom";
import './menu.css'
const Menu = () => {
    return (
        <div>
            <ul className="menu">
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='Products'>Products</Link>
                </li>
                <li>
                    <Link to='Recipes'>Recipes</Link>
                </li>
            </ul>
            <hr/>
        </div>
    );
};

export default Menu;