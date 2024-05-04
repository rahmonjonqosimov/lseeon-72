import React from "react";
import img from "../../assets/images/not Found.jpg";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  let navigate = useNavigate();
  return (
    <div style={{ textAlign: "center" }} className="container">
      <img style={{ width: "100%" }} src={img} alt="" />
      <button onClick={() => navigate(-1)} className="back">
        Goo Back
      </button>
    </div>
  );
};

export default NotFound;
