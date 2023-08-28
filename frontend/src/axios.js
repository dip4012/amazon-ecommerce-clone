import axios from "axios";

const instance = axios.create({
	baseURL: "https://amazon-clone-backend-zsn5.onrender.com/",
});

export default instance;
