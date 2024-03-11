import React from "react";
import logo from "./images/logo.png"
import logo1 from "./images/logo1.jpeg"
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <>
            <div className="header">
                <div>
                    <img className="image1" src={logo1} alt="logo1"></img>
                </div>
                <div className="home">
                    <div className="subHome1">
                    <Link to={"/login"}>login</Link>
                        
                        <Link to={"/signup"}>Register</Link>
                        <div>ACCOUNT</div>
                        <div>CONTACT US</div>
                    </div>
                    <div className="subHome2">
                        <div><i className="fa-solid fa-house"></i></div>
                        <div className="wallet">WALLET</div>
                        <div>SERVICES</div>
                        <div>HOTELS</div>
                        <div>MORE</div>
                    </div>

                </div>

                <div>
                    <img className="image1" src={logo} alt="logo"></img>
                </div>

            </div>
        </>
    )
}
export default Header