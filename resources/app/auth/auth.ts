export interface IAuthService {
    isLoggedIn();
    register(user);
    login(user);
}

export interface IHttpRegisterResponse {
    data: {
        message: string;
    };
    status: string;
}

export interface IHttpLoginResponse {
    data: {
        token: string;
        message: string;
    },
    status: string;
}