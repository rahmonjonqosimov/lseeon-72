import React from "react";
import img from "../../assets/images/not Found.jpg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  let navigate = useNavigate();
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      style={{ textAlign: "center" }}
      className="container"
    >
      <img style={{ width: "100%" }} src={img} alt="" />
      <button onClick={() => navigate(-1)} className="back">
        Goo Back
      </button>
    </motion.div>
  );
};

export default NotFound;
