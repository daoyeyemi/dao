import { motion } from "framer-motion";
import React from "react";
import logo from "../NunLee/mocklee.png";
import "./style.css"
const NunLee = () => {
    return (
        <motion.div
            whileTap={{ scale: 0.8 }}  
        ><img className="interact" width="270px" length="270px" src={logo}></img>
        </motion.div>
        
    )
}

export default NunLee