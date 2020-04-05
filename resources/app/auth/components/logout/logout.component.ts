import { IHttpLogoutResponse } from './../../auth';
import { StateService } from "@uirouter/angularjs";
import { IAuthService } from '../../services/auth.service';

export class LogoutComponent implements ng.IComponentOptions {
  static NAME = 'appLogout';
  public controller;

  constructor() {
    this.controller = LogoutController;
  }
}

class LogoutController implements ng.IComponentController {
  private token;
  private emailUsed = false;

  constructor(
    private AuthService: IAuthService,
    private $state: StateService,
    private $window: ng.IWindowService
  ) {
    'ngInject';

    this.token = {
      token: this.getToken()
    };
  }

  $onInit() {
    this.logout();
  }

  logout() {
    this.AuthService.logout(this.token)
      .then((response: IHttpLogoutResponse) => {
        if (response.status === 'fail') { return };

        this.$window.localStorage.clear();
        this.$state.go('app');
      });
  }

  getToken() {
    return this.$window.localStorage.getItem('token');
  }
}
