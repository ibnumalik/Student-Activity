import { IWindowService, ITimeoutService } from "angular";
import { AuthService } from './../../services/auth.service';
import { IAuthService, IHttpLoginResponse } from './../../auth';

export class LoginComponent implements ng.IComponentOptions {
  static NAME = 'appLogin';
  public template;
  public controllerAs;
  public controller;

  constructor() {
    this.template = require('./login.component.html');
    this.controllerAs = '$ctrl';
    this.controller = LoginController;
  }
}

class LoginController implements ng.IComponentController {
  private title;
  private user;
  private error = false;

  constructor(
    private AuthService: IAuthService,
    private $state: ng.ui.IStateService,
    private $timeout: ITimeoutService,
    private $window: IWindowService
  ) {
    'ngInject';

    this.title = "Login Page";
    this.user = {};
  }

  login() {

    this.AuthService.login(this.user)
      .then((response: IHttpLoginResponse) => {

        if (
          response.data.message === 'the email does not exist in database' ||
          response.data.message === 'wrong password'
        ) {
          this.error = true; this.hideError(); return;
        }

        this.$state.go('app.dashboard.student');
        this.$window.localStorage.setItem('token', response.data.token);
      });
  }

  hideError() {
    this.$timeout(() => this.error = false, 7000);
  }
}