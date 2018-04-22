import './nav.component.scss';

export class NavbarComponent implements ng.IComponentOptions {
  static NAME: string = 'navbar';
  bindings;
  template: any;
  controller: any;

  constructor() {
    this.template = require('./nav.component.html');
    this.controller = NavbarComponentController;
    this.bindings = { loggedIn: '<' }
  }
}

export class NavbarComponentController implements ng.IComponentController {
  public loggedIn;

  constructor() {}
}