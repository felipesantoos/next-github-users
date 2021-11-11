import User from "../../domain/models/User";
import ServiceResponse from "../../domain/responses/ServiceResponse";

abstract class AbstractUserService {
    abstract find(username: string): Promise<ServiceResponse<User>>;
}

export default AbstractUserService;
