// external lib 
import axios from "axios";

//axios.defaults.headers.common["x-auth-token"] = userService.getJwt();

const service = {
  get: axios.get,
  post: axios.post,
};

export default service;