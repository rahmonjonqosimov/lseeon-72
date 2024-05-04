import React from "react";
import img1 from "../../assets/images/featured1.png";
import img2 from "../../assets/images/featured2.png";
import img3 from "../../assets/images/featured3.png";
import img4 from "../../assets/images/featured4.png";
import img5 from "../../assets/images/featured5.png";
import img6 from "../../assets/images/featured6.png";
import img7 from "../../assets/images/featured7.png";
import img8 from "../../assets/images/featured8.png";
import img9 from "../../assets/images/featured9.png";
import img10 from "../../assets/images/featured10.png";

const Featured = () => {
  let item = [
    {
      id: 1,
      url: img1,
      title: "Cake & Milk",
      item: 26,
      bg: "#F2FCE4",
    },
    {
      id: 2,
      url: img2,
      title: "Oganic Kiwi",
      item: 28,
      bg: "#FFFCEB",
    },
    {
      id: 3,
      url: img3,
      title: "Peach",
      item: 14,
      bg: "#ECFFEC",
    },
    {
      id: 4,
      url: img4,
      title: "Red Apple",
      item: 54,
      bg: "#FEEFEA",
    },
    {
      id: 5,
      url: img5,
      title: "Snack",
      item: 56,
      bg: "#FFF3EB",
    },
    {
      id: 6,
      url: img6,
      title: "Vegetables",
      item: 72,
      bg: "#FFF3FF",
    },
    {
      id: 7,
      url: img7,
      title: "Strawberry",
      item: 36,
      bg: "#F2FCE4",
    },
    {
      id: 8,
      url: img8,
      title: "Black plum",
      item: 123,
      bg: "#FEEFEA",
    },
    {
      id: 9,
      url: img9,
      title: "Custard apple",
      item: 34,
      bg: "#FFFCEB",
    },
    {
      id: 10,
      url: img10,
      title: "Coffe & Tea",
      item: 89,
      bg: "#FEEFEA",
    },
  ];
  let card = item?.map((el) => (
    <div style={{ background: `${el.bg}` }} key={el.id} className="card">
      <img src={el.url} alt={el.title} />
      <h5>{el.title}</h5>
      <p>{el.item} items</p>
    </div>
  ));
  let linkItem = ["Cake & Milk", "Coffes & Teas", "Pet Foods", "Vegetables"];
  let link = linkItem?.map((el, inx) => <li key={inx}>{el}</li>);
  return (
    <section className="featured">
      <div className="container">
        <div className="title">
          <h3>Featured Categories</h3>
          <ul>{link}</ul>
        </div>
        <div className="wrapper">{card}</div>
      </div>
    </section>
  );
};

export default Featured;
