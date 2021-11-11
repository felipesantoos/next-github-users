import axios from "axios";

const GitHubClientAPI = axios.create({
    baseURL: "https://api.github.com/",
});

export default GitHubClientAPI;
