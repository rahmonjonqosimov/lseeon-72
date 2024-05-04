import React from "react";
import Featured from "../../components/featured/Featured";
import Banner from "../../components/banner/Banner";
import Stay from "../../components/stay/Stay";
import Pricing from "../../components/pricing/Pricing";
import Product from "../../components/product/Product";
import Swipers from "../../components/swiper/Swiper";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.section
      initial={{ transform: "scale(.9)" }}
      animate={{ transform: "scale(1)" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <Swipers />
      <Featured />
      <Banner />
      <Product />
      <Stay />
      <Pricing />
    </motion.section>
  );
};

export default Home;
