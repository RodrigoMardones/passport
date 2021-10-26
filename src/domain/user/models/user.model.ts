export interface User {
    name: string;
    lastName: string;
    password: string;
    email: string;
}

export interface Auth {
    expires_in: string;
    token: string;
    timestamp: string;
}