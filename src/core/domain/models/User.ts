interface User {
    login: string,
    id: number,
    avatarUrl: string,
    name: string,
    company?: string,
    blog?: string,
    location?: string,
    email: string,
    bio?: string,
    publicRepos: number,
    publicGists: number,
    followers: number,
    following: number,
    createdAt: string,
}

export default User;
