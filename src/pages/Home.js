import React from "react";
import Main from "../components/Main";
import NavBar from "../components/NavBar";
import Body from "../components/Body";
import "./styles.css";

function Home() {
    return (
      <div className="home">
        <div style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 10,
            }}>
          <NavBar />
        </div>
        <div style={{
              position: "absolute",
              top: 30,
              left: 0,
              width: "100%",
              height: "100%"
            }}>
          <Main /> 
        </div> 
      </div>
    )
}

export default Home;