import User from "../domain/models/User";
import UserResponse from "../domain/responses/UserResponse";

export function responseToUser(response: UserResponse): User {
    return {
        login: response.login,
        id: response.id,
        avatarUrl: response.avatar_url,
        name: response.name,
        company: response.company,
        blog: response.blog,
        location: response.location,
        email: response.email,
        bio: response.bio,
        publicRepos: response.public_repos,
        publicGists: response.public_gists,
        followers: response.followers,
        following: response.following,
        createdAt: response.created_at,
    };
}
