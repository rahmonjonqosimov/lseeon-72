import React from "react";
import logo from "../../assets/images/logo.png";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { ImHeadphones } from "react-icons/im";
import { TbBrandTelegram, TbClockCode } from "react-icons/tb";
import appStore from "../../assets/images/app-store.svg";
import playMarket from "../../assets/images/play-martket.svg";
import payment from "../../assets/images/payment.svg";
import { BiHeadphone } from "react-icons/bi";
import fot1 from "../../assets/images/facebook.svg";
import fot2 from "../../assets/images/twitter.svg";
import fot3 from "../../assets/images/instagram.svg";
import fot4 from "../../assets/images/foot4.svg";
import fot5 from "../../assets/images/youtubw.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  let item = [
    {
      id: 1,
      title: "Company",
      links: [
        "About Us",
        "Delivery Information",
        "Privacy Policy",
        "Terms & Conditions",
        "Contact Us",
        "Support Center",
        "Careers",
      ],
    },
    {
      id: 2,
      title: "Account",
      links: [
        "Sign In",
        "View Cart",
        "My Wishlist",
        "Track My Order",
        "Help Ticket",
        "Shipping Details",
        "Compare products",
      ],
    },
    {
      id: 3,
      title: "Corporate",
      links: [
        "Become a Vendor",
        "Affiliate Program",
        "Farm Business",
        "Farm Careers",
        "Our Suppliers",
        "Accessibility",
        "Promotions",
      ],
    },
    {
      id: 4,
      title: "Popular",
      links: [
        "Milk & Flavoured Milk",
        "Butter and Margarine",
        "Eggs Substitutes",
        "Marmalades",
        "Sour Cream and Dips",
        "Tea & Kombucha",
        "Cheese",
      ],
    },
  ];
  let links = item?.map((el) => (
    <ul key={el.id}>
      <h4>{el.title}</h4>
      {el?.links?.map((el, inx) => (
        <li key={inx}>{el}</li>
      ))}
    </ul>
  ));
  return (
    <section className="footer">
      <div className="container footer__content">
        <div className="firts__column">
          <img src={logo} className="logo" alt="Logo" />
          <p>Awesome grocery store website template</p>
          <span>
            <HiOutlineLocationMarker className="loc" />
            <h6>
              Address: 5171 W Campbell Ave undefined Kent, Utah 53127 United
              States
            </h6>
          </span>
          <span>
            <ImHeadphones />
            <h6>Call Us:(+91) - 540-025-124553</h6>
          </span>
          <span>
            <TbBrandTelegram />
            <h6>Email:sale@Nest.com</h6>
          </span>
          <span>
            <TbClockCode />
            <h6>Hours:10:00 - 18:00, Mon - Sat</h6>
          </span>
        </div>
        {links}
        <ul>
          <h4>Install App</h4>
          <li>From App Store or Google Play</li>
          <li>
            <img src={appStore} alt="" />
            <img src={playMarket} alt="" />
          </li>
          <li>Secured Payment Gateways</li>
          <li>
            <img src={payment} alt="" />
          </li>
        </ul>
      </div>
      <div className="hr"></div>
      <div className="footer__bottom container">
        <p>
          © 2022, <span>Nest</span> - HTML Ecommerce Template All rights
          reserved
        </p>
        <div className="support">
          <BiHeadphone />
          <span>
            <h4>1900 - 6666</h4>
            <p>Working 8:00 - 22:00</p>
          </span>
        </div>
        <div className="support">
          <BiHeadphone />
          <span>
            <h4>1900 - 8888</h4>
            <p>24/7 Support Center</p>
          </span>
        </div>
        <div className="follow">
          <div className="top">
            <span>Follow us</span>
            <div className="link">
              <Link target="_blank" to={"https://www.facebook.com/"}>
                <img src={fot1} alt="" />
              </Link>
              <Link target="_blank" to={"https://twitter.com/"}>
                <img src={fot2} alt="" />
              </Link>
              <Link target="_blank" to={"https://www.instagram.com/"}>
                <img src={fot3} alt="" />
              </Link>
              <Link>
                <img src={fot4} alt="" />
              </Link>
              <Link target="_blank" to={"https://www.youtube.com/"}>
                <img src={fot5} alt="" />
              </Link>
            </div>
          </div>
          <div className="bottom">
            Up to 15% discount on your first subscribe
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
