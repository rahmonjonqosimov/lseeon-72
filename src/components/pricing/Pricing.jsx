import React from "react";
import url1 from "../../assets/images/pricing-1.svg";
import url2 from "../../assets/images/pricing-2.svg";
import url3 from "../../assets/images/pricing-3.svg";
import url4 from "../../assets/images/pricing-4.svg";
import url5 from "../../assets/images/pricing-5.svg";

const Pricing = () => {
  let item = [
    {
      id: 1,
      url: url1,
      title: "Best prices & offers",
      desc: "Orders $50 or more",
    },
    {
      id: 2,
      url: url2,
      title: "Free delivery",
      desc: "24/7 amazing services",
    },
    {
      id: 3,
      url: url3,
      title: "Great daily deal",
      desc: "When you sign up",
    },
    {
      id: 4,
      url: url4,
      title: "Wide assortment",
      desc: "Mega Discounts",
    },
    {
      id: 5,
      url: url5,
      title: "Easy returns",
      desc: "Within 30 days",
    },
  ];
  let card = item?.map((el) => (
    <div key={el.id} className="card">
      <img src={el.url} alt={el.title} />
      <div className="text">
        <h4>{el.title}</h4>
        <h5>{el.desc}</h5>
      </div>
    </div>
  ));
  return (
    <section className="pricing">
      <div className="container">
        <div className="wrapper">{card}</div>
      </div>
    </section>
  );
};

export default Pricing;
