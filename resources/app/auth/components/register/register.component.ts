import { IAuthService, IHttpRegisterResponse } from './../../auth';
import { StateService } from "@uirouter/angularjs";

export class RegisterComponent implements ng.IComponentOptions {
  static NAME = 'appRegister';
  public template;
  public controllerAs;
  public controller;

  constructor() {
    this.template = require('./register.component.html');
    this.controllerAs = '$ctrl';
    this.controller = RegisterController;
  }
}

class RegisterController implements ng.IComponentController {
  public title;
  public user;
  public emailUsed = false;

  constructor(
    private AuthService: IAuthService,
    private $state: StateService,
    private $timeout: ng.ITimeoutService
  ) {
    'ngInject';

    this.title = "Register Page";
    this.user = {};
  }

  register() {

    this.AuthService.register(this.user)
      .then((response: IHttpRegisterResponse) => {

        if (response.data && response.data.message === 'email already used') {
          this.emailUsed = true;
          this.hideError();
          return;
        }

        if (response.status === 'success') {
          this.$state.go('app.auth.login');
        }
      });
  }

  hideError() {
    this.$timeout(() => this.emailUsed = false, 7000);
  }
}