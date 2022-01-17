import "./style.css";

import React from "react";
import logo1 from "../Main/github.png";
import logo2 from "../Main/linkedin.png";
import nbadataproject from "../ProjectCollect/nbadataproject.png";
import oyedaEcom from "../ProjectCollect/oyedaEcom.png";
import screenshot1 from "../ProjectCollect/trek.png";
import screenshot2 from "../ProjectCollect/tinderforrestaurants.png";
import screenshot3 from "../ProjectCollect/letuschat2.2.png";
import screenshot4 from "../ProjectCollect/mocklalibela.png";
import screenshot5 from "../ProjectCollect/gitwhatyouwant.png";
import screenshot6 from "../ProjectCollect/mockrealestate.png";
import screenshot7 from "../ProjectCollect/crypto-data-science.png";

function ProjectCollect() {
    return (
        <div>
            <h1>My Projects</h1>
            <div className="container">            
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card">
                        <a href={"https://rbraun04.github.io/Trek/"} target={"_blank"}>
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
                        <a href={"https://vast-lowlands-43566.herokuapp.com/"} target={"_blank"}>
                            <img src={screenshot2} className="card-img-top" alt="..."/>
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">Tinder for Restaurants</h5>
                            <p className="card-text"> Tinder for Restaurants is an app that helps groups of choosing a restaurant through rounds of swiping, similar to Tinder UI. Run with Sequelize ORM to manage data in MySQL.</p>
                            <p className="card-text"><small className="text-muted">September 14, 2020</small></p>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className="col">
                    <div className="card">
                        <a href={"https://eager-ardinghelli-3b7e8f.netlify.app/"} target={"_blank"}>
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
                        <a href={"https://epic-curran-476cb9.netlify.app/"} target={"_blank"}>
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
                    <a href={"https://tender-curran-2ed215.netlify.app/"} target={"_blank"}>
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
                <div className="col">
                    <div className="card">
                        <a href={"https://cocky-montalcini-ebb939.netlify.app/"} target={"_blank"}>
                            <img src={screenshot6} className="card-img-top" alt="..."/>
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">Living</h5>
                            <p className="card-text">Mock real estate app with functional carousel and cool aesthetics. Made possible using unsplash.com and ReactJS</p>
                            <p className="card-text"><small className="text-muted">July 14, 2021</small></p>
                        </div>
                    </div>
                </div>
            </div>
            <br></br><br></br>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card">
                        <a href={"http://daoyeyemi.pythonanywhere.com/"} target={"_blank"}>
                            <img src={oyedaEcom} className="card-img-top" alt="..."/>
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">oyedaEcom</h5>
                            <p className="card-text">an e-commerce app made possible using Python and Django framework</p>
                            <p className="card-text"><small className="text-muted">December 7, 2021</small></p>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className="col">
                    <div className="card">
                        <a href={"https://share.streamlit.io/daoyeyemi/nbadata/data.py"} target={"_blank"}>
                            <img src={nbadataproject} className="card-img-top" alt="..."/>
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">NBA Data Science Application</h5>
                            <p className="card-text">a web application that displays NBA players stats from every season from 1951 to 2020</p>
                            <p className="card-text"><small className="text-muted">December 20, 2021</small></p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <a href={"https://share.streamlit.io/daoyeyemi/cryptodatascience/index.py"} target={"_blank"}>
                            <img src={screenshot7} className="card-img-top" alt="..."/>
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">Cryptocurrency Data Science</h5>
                            <p className="card-text">
                                a cryptocurrency data science app made possible using Streamlit and Python; 
                                displays top cryptocurrencies and percent changes using charts and tables
                            </p>
                            <p className="card-text"><small className="text-muted">January 10, 2022</small></p>
                        </div>
                    </div>
                </div>
                <br></br>
            </div>

        </div>                
            <div id="footer">
                <a href={"https://github.com/daoyeyemi"} target={"_blank"}><img id="img1" src={logo1} alt="..."></img></a>
                <a href={"https://linkedin.com/in/david-oyeyemi-035689103"} target={"_blank"}><img id="img2" src={logo2} alt="..."></img></a>   
            </div>
        </div>
    )
}

export default ProjectCollect;