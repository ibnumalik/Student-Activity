import { IAuthService } from './../../../auth/auth';
import './app.component.scss';

export class App implements ng.IComponentOptions {
  static NAME: string = 'app';
  template: string;
  controller: any;

  constructor() {
    this.template = require('./app.component.html');
    this.controller = AppController;
  }
}

export class AppController implements ng.IComponentController {
  public loggedIn: boolean;

  constructor(private AuthService: IAuthService) {
    'ngInject';
  }

  $doCheck() {
    this.loggedIn = this.AuthService.isLoggedIn();
  }
}
