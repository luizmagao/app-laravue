import axios from 'axios';
import Cookie from "js-cookie";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_API_URL;
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

axios.interceptors.request.use(function (config) {
  config.headers["X-XSRF-TOKEN"] = Cookie.get("XSRF-TOKEN");
  return config;
});

