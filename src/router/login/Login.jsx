import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import axios from "../../api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { motion } from "framer-motion";
import { FaAngleRight } from "react-icons/fa";

const Login = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  let navigate = useNavigate();
  let [check, setCheck] = useState(false);
  let [username, setUsername] = useState("johnd");
  let [password, setPassword] = useState("m38rmF$");
  let [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    let user = {
      username,
      password,
    };
    axios
      .post("/auth/login", user)
      .then((res) => {
        return (
          localStorage.setItem("token", res.data.token),
          navigate("/admin"),
          toast.success("Welcome to Admin panel!")
        );
      })
      .catch((err) => toast.error("Username or password is incorrect"))
      .finally(() => setLoading(false));
  };
  return (
    <motion.section
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      className="login"
    >
      <div className="navigate">
        <div className="container">
          <ul>
            <li>
              <Link to={"/"}>
                <AiOutlineHome /> Home <FaAngleRight />
              </Link>
            </li>
            <li>Login</li>
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="login__content">
          <img src={logo} className="logo" alt="" />
          <form onSubmit={handleSubmit}>
            <div className="inp">
              <label htmlFor="email">Username*</label>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                id="email"
                required
                placeholder="Enter Your Username"
              />
            </div>
            <div className="inp">
              <label htmlFor="password">Password*</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
                required
                placeholder="Enter Your password"
              />
            </div>
            <div className="check">
              <div className="">
                <input
                  onChange={(e) => setCheck(e.target.checked)}
                  id="check"
                  type="checkbox"
                />
                <label htmlFor="check">Remember Me</label>
              </div>
              <p>Forgot Password?</p>
            </div>
            <div className="btns">
              <button onClick={() => scrollTop()} disabled={loading || !check}>
                {loading ? "Loading..." : "Login"}
              </button>
              <Link>Signup?</Link>
            </div>
          </form>
        </div>
      </div>
      {/* <ToastContainer /> */}
    </motion.section>
  );
};

export default Login;
