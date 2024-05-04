import axios from "axios";

const mainUrl = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export default mainUrl;
