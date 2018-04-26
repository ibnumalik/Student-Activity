export class AuthService {
  static NAME = 'AuthService';
  config;
  url;

  constructor(
    private $http: ng.IHttpService,
    private $window: ng.IWindowService,
    private $httpParamSerializerJQLike: ng.IHttpParamSerializer
  ) {
    'ngInject';

    this.config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
    }
    this.url = 'http://localhost:8080/api'
  }

  isLoggedIn() {
    return this.$window.localStorage.getItem('token') !== null;
  }

  register(user) {
    return this.$http.post(
      this.url + '/register',
      this.$httpParamSerializerJQLike(user),
      this.config
    )
      .then(response => response.data);
  }

  login(user) {

    return this.$http.post(
      this.url + '/login',
      this.$httpParamSerializerJQLike(user),
      this.config
    )
      .then(response => response.data);
  }

  static factory() {
    return (
      $http, $window, $httpParamSerializerJQLike
    ) => new AuthService($http, $window, $httpParamSerializerJQLike);
  }

}