import axios from "axios";

const instance = axios.create({
	baseURL: "https://amazon-clone4012.herokuapp.com/",
});

export default instance;
