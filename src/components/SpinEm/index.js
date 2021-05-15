import React from "react";
import { motion } from "framer-motion";

const SpinEm = () => {
    return (
    <motion.div
    whileHover={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
    ><div className="interact" style={{fontSize: "150px"}}>🙌🏾</div>
  </motion.div>
  )
}

export default SpinEm