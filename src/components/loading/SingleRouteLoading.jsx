import React from "react";

const SingleRouteLoading = () => {
  return (
    <section className="single__route__loading container">
      <div className="single__route__content">
        <div className="main">
          <div className="prod">
            <div className="product___img skeleton__anime"></div>
            <div className="images">
              <div className="im skeleton__anime"></div>
              <div className="im skeleton__anime"></div>
              <div className="im skeleton__anime"></div>
              <div className="im skeleton__anime"></div>
            </div>
          </div>
          <div className="about">
            <div className="title skeleton__anime"></div>
            <div className="price__card">
              <div className="price skeleton__anime"></div>
              <span>
                <div className="foiz skeleton__anime"></div>
                <div className="price__chegirma skeleton__anime"></div>
              </span>
            </div>
            <div className="description "></div>
            <div className="description description3"></div>
            <div className="description description2"></div>
            <div className="description description1"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleRouteLoading;
