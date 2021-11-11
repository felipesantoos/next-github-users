import User from "../../core/domain/models/User";

abstract class AbstractUserAPI {
    abstract find(username: string): Promise<User>;
}

export default AbstractUserAPI;
