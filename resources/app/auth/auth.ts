export interface IAuthService {
    isLoggedIn();
    register(user);
    login(user);
}