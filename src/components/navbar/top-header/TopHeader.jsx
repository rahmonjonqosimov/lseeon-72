import React from "react";
import logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { IoMdHeartEmpty } from "react-icons/io";
import compare from "../../../assets/images/compare.svg";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

const TopHeader = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <section className="top__header">
      <div className="container top__header__content">
        <Link onClick={() => scrollTop()} to={"/"}>
          <img className="nav__logo" src={logo} alt="Logo" />
        </Link>
        <form className="search__form">
          <select name="" id="">
            <option value="all"> All Categories</option>
            <option value="moto"> Moto </option>
            <option value="bag"> Bag</option>
          </select>
          <input placeholder="Search for items..." type="text" />
          <button>
            <FiSearch />
          </button>
          <div className={`search`}></div>
        </form>
        <div className="location">
          <SlLocationPin />
          <select name="" id="">
            <option value="location">Your Location</option>
            <option value="fergara">Fergana</option>
            <option value="kakand">Kakand</option>
          </select>
        </div>
        <ul className="nav__link">
          <li>
            <Link onClick={scrollTop} to={"/compare"}>
              <img src={compare} alt="" />
              <p className="count">3</p>
              <span>Compare</span>
            </Link>
          </li>
          <li>
            <Link onClick={scrollTop} to={"wishlist"}>
              <IoMdHeartEmpty />
              <p className="count">6</p>
              <span>Wishlist</span>
            </Link>
          </li>
          <li>
            <Link onClick={scrollTop} to={"cart"}>
              <IoCartOutline />
              <p className="count">2</p>
              <span>Cart</span>
            </Link>
          </li>
          <li>
            <Link onClick={scrollTop} to={`/login`}>
              <FaRegUser />
              <span>Account</span>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default TopHeader;
