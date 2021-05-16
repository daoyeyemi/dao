import React from "react";
import Main from "../components/Main";
import NavBar from "../components/NavBar";
import Body from "../components/Body";
import "./styles.css";
import { motion } from "framer-motion";

function Home() {

    // const upAndDown = {
    //   in: {
    //     opacity: 1,
    //     x: 0
    //   },
    //   out: {
    //     opacity: 0,
    //     y: "-100vw"
    //   }
    // }

    return (
      <motion.div initial="0" animate="1" exit="0" className="home">
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
      </motion.div>
    )
}

export default Home;