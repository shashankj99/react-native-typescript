export interface User {
    __V?: number,
    _id: string,
    createdAt?: Date,
    email: string,
    name: string,
    role: string,
    updatedAt?: Date,
}

export type AuthResponse = {
    user?: User,
    token: string
}