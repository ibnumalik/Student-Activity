export class AuthService {
  static NAME = 'AuthService';
  config: any;
  url: string;

  constructor(
    private $http: ng.IHttpService,
    private $window: ng.IWindowService,
    private $httpParamSerializerJQLike: ng.IHttpParamSerializer,
    private $rootScope: ng.IRootScopeService,
    private $q: ng.IQService
  ) {
    'ngInject';

    this.config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };
    // Extract to env
    this.url = 'http://school.local/api';
  }

  isLoggedIn() {
    return this.$q((resolve) => {
      resolve(this.hasAuthToken());
    });
  }

  hasAuthToken() {
    return this.$window.localStorage.getItem('token') !== null;
  }

  async register(user: User) {
    const response = await this.$http.post(
      this.url + '/register',
      this.$httpParamSerializerJQLike(user),
      this.config
    );

    return response.data;
  }

  async login(user: User) {
    const response = await this.$http.post(
      this.url + '/login',
      this.$httpParamSerializerJQLike(user),
      this.config
    );

    return response.data;
  }

  async logout(token: string) {
    const response = await this.$http.post(
      this.url + '/logout',
      this.$httpParamSerializerJQLike(token),
      this.config
    );

    this.$rootScope.$broadcast('isLoggedIn', false);

    return response.data;
  }

  static factory() {
    return (
      $http: ng.IHttpService,
      $window: ng.IWindowService,
      $httpParamSerializerJQLike: ng.IHttpParamSerializer,
      $rootScope: ng.IRootScopeService,
      $q: ng.IQService
    ) => {
      'ngInject';
      return new AuthService(
        $http,
        $window,
        $httpParamSerializerJQLike,
        $rootScope,
        $q
      );
    };
  }
}

export interface User {
  email: string;
  password: string;
}

export interface IAuthService {
  isLoggedIn(): Promise<Boolean>;
  register(user: User): Promise<any>;
  login(user: User): Promise<any>;
  logout(token: string): Promise<any>;
}
