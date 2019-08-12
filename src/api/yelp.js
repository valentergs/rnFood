import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer Re7ny7liYdWNBc709nYHSknnbu5cj7RtWBaYGXDY9Gn-aqcEgiR3PxxzS_YH00xc9Q-l8hA98IPL_yLL_HnI6gzDlms1a4UHEwvgsAlpC2TuYsdF6s0DcVpSe8BMXXYx"
  }
});
