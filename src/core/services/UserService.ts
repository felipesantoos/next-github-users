import GitHubUserAPI from "../../data/api/UserAPI";
import User from "../domain/models/User";
import ServiceResponse from "../domain/responses/ServiceResponse";
import AbstractUserService from "./abstraction/AbstractUserService";

class GitHubUserService extends AbstractUserService {
    async find(username: string): Promise<ServiceResponse<User>> {
        const response: ServiceResponse<User> = {};

        try {
            response.data = await new GitHubUserAPI().find(username);
        } catch(e) {
            response.error = e;
        }

        return response;
    }
}

export default GitHubUserService;
