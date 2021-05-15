import React from "react";
import logo from "../Main/cartoondavid.png";
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
                            <svg className="b" width="250px" height="250px" viewBox="0 0 16 16" className="bi bi-file-person" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M12 1H4a1 1 0 0 0-1 1v10.755S4 11 8 11s5 1.755 5 1.755V2a1 1 0 0 0-1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                                <path fillRule="evenodd" d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            </svg>
                        </Link>
                        <Link to="/about" className="iconCaption" style={{ textDecoration: 'none' }}>
                            About Me
                        </Link>
                    </div>
                    
                    <div className="col-md-4">
                        <Link to="/project">
                            <svg className="b" width="250px" height="250px" viewBox="0 0 16 16" className="bi bi-file-richtext" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4z"/>
                                <path fillRule="evenodd" d="M4.5 11.5A.5.5 0 0 1 5 11h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm0-2A.5.5 0 0 1 5 9h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm1.639-3.708l1.33.886 1.854-1.855a.25.25 0 0 1 .289-.047l1.888.974V7.5a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V7s1.54-1.274 1.639-1.208zM6.25 5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z"/>
                            </svg>
                        </Link>
                        <Link to="/project" className="iconCaption" style={{ textDecoration: 'none' }}>
                                 See My Work
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to="/contact">
                            <svg className="b" width="250px" height="250px" viewBox="0 0 16 16" className="bi bi-chat-right-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M14 0a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z"/>
                            </svg>
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