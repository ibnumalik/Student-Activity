export class LogoutComponent implements ng.IComponentOptions {
  static NAME: string = 'appLogout';
  controller;

  constructor() {
    this.controller = LogoutController;
  }
}

class LogoutController implements ng.IComponentController {
  title: string;
  token;
  emailUsed = false;

  constructor(
    private $http: ng.IHttpService,
    private $state: ng.ui.IStateService,
    private $httpParamSerializerJQLike: ng.IHttpParamSerializer,
    private $window: ng.IWindowService
  ) {
    'ngInject';

    this.token = {
      token: this.$window.localStorage.getItem('token')
    };
  }

  $onInit() {
    this.logout();
  }

  logout() {
    this.$http.post(
      'http://localhost:8080/api/logout',
      this.$httpParamSerializerJQLike(this.token),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    ).then(response => {
      if (response.data['status'] === 'fail') {
        return;
      }

      this.$window.localStorage.clear();
      this.$state.go('app.auth.login');
    })
  }
}