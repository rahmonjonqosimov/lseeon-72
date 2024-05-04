import React, { useEffect } from "react";
import card1 from "../../assets/images/banner-1.svg";
import card2 from "../../assets/images/banner-2.svg";
import card3 from "../../assets/images/banner-3.svg";

const Banner = () => {
  let data = [
    {
      id: 1,
      url: card1,
      title: "Everyday Fresh & Clean with Our Products",
      btn: "Shop Now",
    },
    {
      id: 2,
      url: card2,
      title: "Make your Breakfast Healthy and Easy",
      btn: "Shop Now",
    },
    {
      id: 3,
      url: card3,
      title: "The best Organic Products Online",
      btn: "Shop Now",
    },
  ];
  let card = data?.map((el) => (
    <div key={el.id} className="banner__card">
      <img src={el.url} alt={el.title} />
      <div className="text">
        <h4>{el.title}</h4>
        <button>{el.btn}</button>
      </div>
    </div>
  ));
  return (
    <section className="banner">
      <div className="container">
        <div className="banner__wrapper">{card}</div>
      </div>
    </section>
  );
};

export default Banner;
