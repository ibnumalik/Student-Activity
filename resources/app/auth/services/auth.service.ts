export interface IAuthService {
  isLoggedIn();
}

export class AuthService {
  static NAME = 'AuthService';

  constructor(
    private $http: ng.IHttpService,
    private $window: ng.IWindowService
  ) {
    'ngInject';
  }

  isLoggedIn() {
    return this.$window.localStorage.getItem('token') !== null;
  }

  static factory() {
    return ($http, $window) => new AuthService($http, $window);
  }

}