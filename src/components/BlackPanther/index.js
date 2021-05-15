import React from "react";
import { motion } from "framer-motion";
import logo2 from "../NunLee/inodewe.png";

const DeBlekPenta = () => {
    return (
        <motion.div 
        whileTap={{ scale: 0.8 }}
        ><img width="270px" length="270px" src={logo2}></img></motion.div>
    )
}

export default DeBlekPenta;