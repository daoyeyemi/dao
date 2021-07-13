import React from "react";
import "./style.css";
import logo1 from "../Main/github.png";
import logo2 from "../Main/linkedin.png";
import screenshot1 from "../ProjectCollect/trek.png";
import screenshot2 from "../ProjectCollect/tinderforrestaurants.png";
import screenshot3 from "../ProjectCollect/letuschat2.2.png";
import screenshot4 from "../ProjectCollect/mocklalibela.png";
import screenshot5 from "../ProjectCollect/gitwhatyouwant.png";

function ProjectCollect() {
    return (
        <div>
            <h1>My Projects</h1>
            <div className="container">            
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card">
                        <a href={"https://rbraun04.github.io/Trek/"}>
                            <img src={screenshot1} className="card-img-top" alt="..."/>
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">Trek</h5>
                            <p className="card-text">The TREK app is designed to be a single stop app for planning a day's outing. 
                            Plan out a route to a nearby hiking spot, then find local 
                            restaurants and shops to stop at along the way.</p>
                            <p className="card-text"><small className="text-muted">August 11, 2020 </small></p>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className="col">
                    <div className="card">
                        <a href={"https://vast-lowlands-43566.herokuapp.com/"}>
                            <img src={screenshot2} className="card-img-top" alt="..."/>
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">Tinder for Restaurants</h5>
                            <p c lassName="card-text"> Tinder for Restaurants is an app that helps groups of choosing a restaurant through rounds of swiping, similar to Tinder UI. Run with Sequelize ORM to manage data in MySQL.</p>
                            <p className="card-text"><small className="text-muted">September 14, 2020</small></p>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className="col">
                    <div className="card">
                        <a href={"https://eager-ardinghelli-3b7e8f.netlify.app/"}>
                            <img src={screenshot3} className="card-img-top" alt="..."/>
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">Let Us Chat</h5>
                            <p className="card-text">LetUsChat is an interactive and social chat application meant to connect a network of coders and non coders alike.</p>
                            <p className="card-text"><small className="text-muted">May 10, 2021</small></p>
                        </div>
                    </div>
                </div>
            </div>    
            <br></br> <br></br>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card">
                        <a href={"https://epic-curran-476cb9.netlify.app/"}>
                            <img src={screenshot4} className="card-img-top" alt="..."/>
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">Lalibela Ethiopian</h5>
                            <p className="card-text">Mock website of my favorite restaurant in Los Angeles.</p>
                            <p className="card-text"><small className="text-muted">June 13, 2021</small></p>
                        </div>
                </div>
                </div>
                <br></br>
                <div className="col">
                    <div className="card">
                    <a href={"https://tender-curran-2ed215.netlify.app/"}>
                        <img src={screenshot5} className="card-img-top" alt="..."/>
                    </a>
                    <div className="card-body">
                        <h5 className="card-title">Git What You Want</h5>
                        <p className="card-text">Mock website with fully functional eCommerce application using Commerce.js. Stripe integration with payment option. </p>
                        <p className="card-text"><small className="text-muted">July 5, 2021</small></p>
                    </div>
                </div>
                </div>
                <br></br>
            </div>
</div>                
                
            
            <div id="footer">
                <a href={"https://github.com/daoyeyemi"}><img id="img1" src={logo1} alt="..."></img></a>
                <a href={"https://linkedin.com/in/david-oyeyemi-035689103"}><img id="img2" src={logo2} alt="..."></img></a>   
            </div>
        </div>
    )
}

export default ProjectCollect;