import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Navigation,
  Autoplay,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
import img1 from "../../assets/images/swiper1.jpg";
import img2 from "../../assets/images/swiper2.jpg";
import img3 from "../../assets/images/swiper3.webp";
const Swipers = () => {
  return (
    <div style={{ marginTop: "30px" }} className="container swiper">
      <Swiper
        loop={true}
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={false}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        keyboard={true}
        modules={[Navigation, Autoplay, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="swiper__img" src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper__img" src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper__img" src={img3} alt="" />
        </SwiperSlide>
      </Swiper>
      <div className="text">
        <h2>Fresh Vegetables Big discount </h2>
        <p>Save up to 50% off on your first order</p>
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
    </div>
  );
};

export default Swipers;
