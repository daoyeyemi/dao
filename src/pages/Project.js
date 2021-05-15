import React from "react";
import NavBar from "../components/NavBar";
import Body from "../components/Body";
import ProjectCollect from "../components/ProjectCollect";
import "./styles.css";

function Project() {
    return (
          <div className="project">
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 10
              }}>
              <NavBar />
            </div>
            <div style={{
              position: "absolute",
              top: 50,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 10,
            }}>
              <ProjectCollect />
            </div>
          </div>
    )
}

export default Project;