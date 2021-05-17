import React from "react";
import logo from "../Main/IMG_8144.JPG";
import "../Main/style.css";
import logo1 from "../Main/github.png";
import logo2 from "../Main/linkedin.png";
import { Link } from "react-router-dom";

function Main() {
    return (
        <div id="main">
            <img id="drunklee" src={logo} alt="..."></img>
            <p>The David Oyeyemi Portfolio</p>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <Link to="/about">
                            <i class="fas fa-user-circle"></i>
                        </Link>
                        <Link to="/about" className="iconCaption" style={{ textDecoration: 'none' }}>
                            About Me
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to="/project">
                            <i className="fas fa-file"></i>
                        </Link>
                        <Link to="/project" className="iconCaption" style={{ textDecoration: 'none' }}>
                                 See My Work
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to="/contact">
                            <i class="fas fa-comment-dots"></i>
                        </Link>
                        <Link to="/contact" className="iconCaption" style={{ textDecoration: 'none' }}>
                                Contact Me
                        </Link>
                    </div> 
                </div>
                <div id="footer">
                    <Link to="github"><img className="footerImg" id="img1" src={logo1} alt="..."></img></Link>
                    <Link to="linkedin"><img className="footerImg" id="img2" src={logo2} alt="..."></img></Link>   
                </div>
            </div>
        </div>
    )
}

export default Main;