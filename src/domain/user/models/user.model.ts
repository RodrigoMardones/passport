export interface User {
    name: string;
    lastName: string;
    password: string;
    email: string;
    dni: string;
};

export interface Auth {
    expiresIn: string;
    token: string;
    timestamp: string;
};

export interface AuthParams {
    email: string;
    password: string;
};
