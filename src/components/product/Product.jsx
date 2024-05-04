import React, { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";
import Loading from "../loading/Loading";
import { FaStar } from "react-icons/fa";

const Product = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  let [count, setCount] = useState(1);
  let [categories, setCategories] = useState("all");
  let url = `/products${
    categories === "all" ? "" : `/category/${categories}`
  }?limit=${count * 10}`;
  let { data, loading } = useFetch(url, count, categories);
  let { data: cate } = useFetch("/products/categories");
  let category = cate?.data.map((el, inx) => (
    <li key={inx}>
      <button
        name={el}
        onClick={(e) => (setCategories(e.target.name), setCount(0.5))}
      >
        {el.slice(0, 1).toUpperCase()}
        {el.slice(1)}
      </button>
    </li>
  ));
  let card = data?.data?.map((el) => (
    <div key={el.id} className="card">
      <Link onClick={scrollTop} to={`/product/${el.id}`}>
        <img className="product__img" src={el.image} alt={el.title} />
      </Link>
      <div className="text">
        <h6>{el.category}</h6>
        <h4 title={el.title}>{el.title}</h4>
        <div className="stars">
          {Array(Math.round(el.rating.rate))
            .fill("")
            .map((_, inx) => (
              <div key={inx} className="star">
                <FaStar />
              </div>
            ))}
          ({el.rating.rate})
        </div>

        <h5> Number of products {el.rating.count}</h5>
        <div className="cart">
          <span>
            <h3>${(el.price * 0.9).toFixed(2)}</h3>
            <h3 className="chegirma">${el.price} </h3>
          </span>
          <button>
            <BsCart3 /> Add
          </button>
        </div>
      </div>
      <div
        className={`position ${
          el.rating.rate >= 1 && el.rating.rate <= 2
            ? "bg1"
            : "" || (el.rating.rate > 2 && el.rating.rate <= 3)
            ? "bg2"
            : "" || (el.rating.rate > 3 && el.rating.rate <= 4)
            ? "bg3"
            : "" || (el.rating.rate > 4 && el.rating.rate < 5)
            ? "bg4"
            : ""
        }`}
      >
        <h4>{el.rating.rate}</h4>
      </div>
    </div>
  ));

  return (
    <section className="product">
      <div className="container title">
        <h2>Popular Products</h2>
        <ul>
          <li>
            <button onClick={(e) => setCategories("all")}>All</button>
          </li>
          {category}
        </ul>
      </div>

      {loading ? (
        <Loading count={10} />
      ) : (
        <div className="container wrapper">{card}</div>
      )}

      <div className="container btns">
        <button
          disabled={loading}
          className="see-more"
          onClick={() => setCount((p) => p + 1)}
        >
          See more
        </button>
      </div>
    </section>
  );
};

export default Product;
