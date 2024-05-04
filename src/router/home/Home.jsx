import React from "react";
import Featured from "../../components/featured/Featured";
import Banner from "../../components/banner/Banner";
import Stay from "../../components/stay/Stay";
import Pricing from "../../components/pricing/Pricing";
import Product from "../../components/product/Product";
import Swipers from "../../components/swiper/Swiper";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  return (
    <>
      <Swipers />
      <Featured />
      <Banner />
      <Product />
      <Stay />
      <Pricing />
    </>
  );
};

export default Home;
