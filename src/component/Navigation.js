import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation(){
    return <div className="Nav__button"> 
        <div className="Nav__clumn"><Link to="/">home</Link></div>
        <div className="Nav__clumn"><Link to="/about">About</Link></div>
    </div>

}

export default Navigation;
