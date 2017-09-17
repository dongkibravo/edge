import axios from "axios";

const Usermodel = axios.create({
  baseURL: 'http://52.78.124.31',
  timeout: 10000,
});

export default Usermodel;