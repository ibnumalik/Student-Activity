import { IHttpResponse } from "angular";

export interface ResponseRegister extends IHttpResponse<object> {
  data: {
    data: {
      message: string;
    };
    status: string;
  };
}

export class RegisterComponent implements ng.IComponentOptions {
  static NAME: string = 'appRegister';
  template: any;
  controllerAs: string;
  controller;

  constructor() {
    this.template = require('./register.component.html');
    this.controllerAs = '$ctrl';
    this.controller = RegisterController;
  }
}

class RegisterController implements ng.IComponentController {
  title: string;
  user;
  emailUsed = false;

  constructor(
    private $http: ng.IHttpService,
    private $state: ng.ui.IStateService,
    private $httpParamSerializerJQLike: ng.IHttpParamSerializer,
    private $timeout: ng.ITimeoutService
  ) {
    'ngInject';

    this.title = "Register Page";
    this.user = {};
  }

  register() {
    this.$http.post(
      'http://localhost:8080/api/register',
      this.$httpParamSerializerJQLike(this.user),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    ).then((response: ResponseRegister) => {

      if (response.data.data && response.data.data.message === 'email already used') {
        this.emailUsed = true;
        this.hideError();
        return;
      }

      if (response.data.status === 'success') {
        this.$state.go('app.auth.login');
      }
    })
  }

  hideError() {
    this.$timeout(() => this.emailUsed = false, 7000);
  }
}