import React from "react";
import { motion } from "framer-motion";

const Enlarge = () => {
    return (
        <motion.div 
        whileHover={{
            scale: 3
        }}><div className="interact" style={{fontSize: "150px"}}>🤔</div>
        </motion.div>
    )
}

export default Enlarge