import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4a07781ddc68467486ed6ace4177d503",
  },
});
