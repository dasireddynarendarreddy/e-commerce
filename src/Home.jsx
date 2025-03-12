import React from 'react'

import { motion } from "framer-motion";




function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <motion.h1
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ fontSize: "3rem", fontWeight: "bold", color: "#FF6347", letterSpacing: "3px" }}
      >
        Welcome to the Developer's Book Search App
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        style={{ fontSize: "1.5rem", fontWeight: "normal", color: "#4CAF50", marginTop: "20px" }}
      >
        Search, explore, and download books with ease. Your perfect developer’s library at your fingertips!
      </motion.p>

      <motion.p
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 1 }}
        style={{ fontSize: "1.5rem", fontWeight: "normal", color: "#FFD700", marginTop: "10px" }}
      >
        Browse through various programming books Like Java,Python,Javascript etc and enhance your skills.
      </motion.p>
    </div>
  );
}

export default Home;
