import User from "../../core/domain/models/User";
import UserResponse from "../../core/domain/responses/UserResponse";
import { responseToUser } from "../../core/utils/ResponseUtils";
import AbstractUserAPI from "../abstraction/AbstractUserAPI";
import GitHubClientAPI from "./GitHubClientAPI";

class GitHubUserAPI extends AbstractUserAPI {
    async find(username: string): Promise<User> {
        const response = await GitHubClientAPI.get<UserResponse>(`users/${username}`);

        return responseToUser(response.data);
    }
}

export default GitHubUserAPI;
