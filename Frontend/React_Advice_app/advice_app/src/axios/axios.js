import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.adviceslip.com"
});

export default instance;