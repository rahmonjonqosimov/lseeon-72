import React from "react";
import icon from "../../../assets/images/Icon.svg";
import icon1 from "../../../assets/images/Nav → List → Item → icon-hot.svg.svg";
import { BiHeadphone } from "react-icons/bi";
import { Link } from "react-router-dom";

const BottomHeader = () => {
  let link = [
    "Home",
    "About",
    "Shop",
    "Vendors",
    "Mega menu",
    "Blog",
    "Pages",
    "Contact",
  ];

  let items = link?.map((el, inx) => (
    <li key={inx}>
      <select name="" id="">
        <option value={el}>
          <Link to={el == "Home" ? "/" : ""}>{el}</Link>
        </option>
      </select>
    </li>
  ));
  return (
    <section className="bottom__header">
      <div className="container nav__links">
        <div className="link__left  horizontal-menu">
          <div className="category ">
            <img src={icon} alt="Icon" />
            <span>Browse</span>
            <select name="" id="">
              <option value="all">All Categories</option>
            </select>
          </div>
          <ul class="navbar__bottom">
            <li>
              <img src={icon1} alt="" />
              <span>Deals</span>
            </li>
            {items}
          </ul>
        </div>
        <div className="support">
          <BiHeadphone />
          <span>
            <h4>1900 - 888</h4>
            <p>24/7 Support Center</p>
          </span>
        </div>
      </div>
    </section>
  );
};

export default BottomHeader;
