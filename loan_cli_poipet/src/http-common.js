import axios from "axios";

export default axios.create({
  baseURL: "https://backend-loan-express.onrender.com/api",
  headers: {
    "Content-type": "application/json"
  }
});
