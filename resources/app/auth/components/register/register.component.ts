import { IHttpRegisterResponse } from './../../auth';
import { StateService } from '@uirouter/angularjs';
import { IAuthService, User } from '../../services/auth.service';
import { Injectable, IControllerConstructor } from 'angular';

export class RegisterComponent implements ng.IComponentOptions {
  static NAME = 'appRegister';
  public template: string;
  public controllerAs: string;
  public controller: Injectable<IControllerConstructor>;

  constructor() {
    this.template = require('./register.component.html');
    this.controllerAs = '$ctrl';
    this.controller = RegisterController;
  }
}

class RegisterController implements ng.IComponentController {
  public title = 'Register Page';
  public user: User;
  public emailUsed = false;

  constructor(
    private AuthService: IAuthService,
    private $state: StateService,
    private $timeout: ng.ITimeoutService
  ) {
    'ngInject';

    this.user = {
      email: '',
      password: '',
    };
  }

  register() {
    this.AuthService.register(this.user).then(
      (response: IHttpRegisterResponse) => {

        if (response.data && response.data.message === 'email already used') {
          return this.showError();
        }

        if (response.status === 'success') {
          this.$state.go('app');
        }
      }
    );
  }

  showError() {
    this.emailUsed = true;

    this.$timeout(() => (this.emailUsed = false), 7000);
  }
}
