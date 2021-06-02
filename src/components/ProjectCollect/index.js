import React from "react";
import "./style.css";
import logo1 from "../Main/github.png";
import logo2 from "../Main/linkedin.png";
import { Link } from "react-router-dom";
import screenshot1 from "../ProjectCollect/trek.png";
import screenshot2 from "../ProjectCollect/tinderforrestaurants.png";
import screenshot3 from "../ProjectCollect/letuschat.png";
import screenshot4 from "../ProjectCollect/letuschat2.1.png";

function ProjectCollect() {
    return (
        <div>
            <h1>My Projects</h1>
            <div className="card-deck">
                <div className="card">
                    <Link to="trek">
                        <img src={screenshot1} className="card-img-top" alt="..."/>
                    </Link>
                    <div className="card-body">
                        <h5 className="card-title">Trek</h5>
                        <p className="card-text">The TREK app is designed to be a single stop app for planning a day's outing. 
                        Plan out a route to a nearby hiking spot, then find local 
                        restaurants and shops to stop at along the way.</p>
                        <p className="card-text"><small className="text-muted">August 11, 2020 </small></p>
                    </div>
                </div>
                <div className="card">
                    <Link to="tinderforrestaurants">
                        <img src={screenshot2} className="card-img-top" alt="..."/>
                    </Link>
                    <div className="card-body">
                        <h5 className="card-title">Tinder for Restaurants</h5>
                        <p c lassName="card-text"> Tinder for Restaurants is an app that helps groups of choosing a restaurant through rounds of swiping, similar to Tinder UI. Run with Sequelize ORM to manage data in MySQL.</p>
                        <p className="card-text"><small className="text-muted">September 14, 2020</small></p>
                    </div>
                </div>
                <div className="card">
                    <Link to="letuschat">
                        <img src={screenshot3} className="card-img-top" alt="..."/>
                    </Link>
                    <div className="card-body">
                        <h5 className="card-title">Let Us Chat</h5>
                        <p className="card-text">LetUsChat is an interactive and social chat application meant to connect a network of coders and non coders alike.</p>
                        <p className="card-text"><small className="text-muted">May 10, 2021</small></p>
                    </div>
                </div>
            </div>
            <div id="footer">
                <Link to="github"><img id="img1" src={logo1} alt="..."></img></Link>
                <Link to="linkedin"><img id="img2" src={logo2} alt="..."></img></Link>   
            </div>
        </div>
    )
}

export default ProjectCollect;