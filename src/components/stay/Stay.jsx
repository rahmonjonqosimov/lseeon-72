import React from "react";
import stayBg from "../../assets/images/stay bg.svg";

const Stay = () => {
  return (
    <section className="stay">
      <div className="container">
        <div className="stay__content">
          <div className="text">
            <h2>Stay home & get your daily needs from our shop</h2>
            <p>Start You'r Daily Shopping with Nest Mart</p>
            <form>
              <input
                required
                type="email"
                placeholder="Your emaill address"
                name="email"
                id="email"
              />
              <button>Subscribe</button>
            </form>
          </div>
          <img className="stay--bg" src={stayBg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Stay;
