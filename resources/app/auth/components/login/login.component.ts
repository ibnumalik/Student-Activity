import { IWindowService, ITimeoutService, IHttpResponse } from "angular";

export interface IHttpLoginResponse extends IHttpResponse <object> {
  data: {
    data: {
      token: string;
      message: string;
    },
    status: string;
  }
}

export class LoginComponent implements ng.IComponentOptions {
  static NAME:string = 'appLogin';
  template: any;
  controllerAs:string;
  controller;

  constructor() {
    this.template = require('./login.component.html');
    this.controllerAs = '$ctrl';
    this.controller = LoginController;
  }
}

class LoginController implements ng.IComponentController {
  title: string;
  user;
  error = false;

  constructor(
    private $http: ng.IHttpService,
    private $state: ng.ui.IStateService,
    private $httpParamSerializerJQLike: ng.IHttpParamSerializer,
    private $timeout: ITimeoutService,
    private $window: IWindowService
  ) {
    'ngInject';

    this.title = "Login Page";
    this.user = {};
  }

  login() {
    this.$http.post(
      'http://localhost:8080/api/login',
      this.$httpParamSerializerJQLike(this.user),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      }
    ).then((response: IHttpLoginResponse) => {

      if (
        response.data.data.message === 'the email does not exist in database' ||
        response.data.data.message === 'wrong password'
      ) {
        this.error = true; this.hideError(); return;
      }

      this.$state.go('app.dashboard.student');
      this.$window.localStorage.setItem('token', response.data.data.token);
    });
  }

  hideError() {
    this.$timeout(() => this.error = false, 7000);
  }
}