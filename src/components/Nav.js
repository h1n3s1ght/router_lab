import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <div className="nav">
            <div className="nav-element"><Link to="/">Home</Link></div>
            <div className="nav-element"><Link to="/about">About</Link></div>
            <div className="nav-element"><Link to="/stocks">Stocks</Link></div>
        </div>
    );
};

export default Nav;