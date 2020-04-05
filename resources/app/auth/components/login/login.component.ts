import {
  IWindowService,
  ITimeoutService,
  Injectable,
  IControllerConstructor,
} from 'angular';
import { IHttpLoginResponse } from './../../auth';
import { StateService } from '@uirouter/angularjs';
import { IAuthService, User } from '../../services/auth.service';

export class LoginComponent implements ng.IComponentOptions {
  static NAME = 'appLogin';
  public template: string;
  public controllerAs: string;
  public controller: Injectable<IControllerConstructor>;

  constructor() {
    this.template = require('./login.component.html');
    this.controllerAs = '$ctrl';
    this.controller = LoginController;
  }
}

class LoginController implements ng.IComponentController {
  title = 'Login Page';
  private user: User;
  error = false;

  constructor(
    private AuthService: IAuthService,
    private $state: StateService,
    private $timeout: ITimeoutService,
    private $window: IWindowService
  ) {
    'ngInject';

    this.user = {
      email: '',
      password: '',
    };
  }

  login() {
    this.AuthService.login(this.user).then((response: IHttpLoginResponse) => {
      const hasError =
        response.data.message === 'the email does not exist in database' ||
        response.data.message === 'wrong password';

      if (hasError) {
        return this.showError(hasError);
      }

      this.$state.go('app.dashboard.student');
      this.$window.localStorage.setItem('token', response.data.token);
    });
  }

  showError(hasError: boolean) {
    this.error = hasError;

    this.$timeout(() => (this.error = false), 7000);
  }
}
