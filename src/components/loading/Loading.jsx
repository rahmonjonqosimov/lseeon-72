import React from "react";

const Loading = ({ count }) => {
  return (
    <section className="loading">
      <div className="wrapper container">
        {Array(count)
          .fill("")
          .map((_, inx) => (
            <div key={inx} className="card">
              <div className="img skeleton__anime"></div>
              <div className="line skeleton__anime"></div>
              <div className="line1 skeleton__anime"></div>
              <div className="line2 skeleton__anime"></div>
              <div className="btnss">
                <div className="line3 skeleton__anime"></div>
                <div className="button skeleton__anime"></div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Loading;
