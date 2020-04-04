import './nav.component.scss';

export class NavbarComponent implements ng.IComponentOptions {
  static NAME: string = 'navbar';
  bindings: any;
  template: any;
  controller: any;

  constructor() {
    this.template = require('./nav.component.html');
    this.controller = NavbarComponentController;
    this.bindings = { isLoggedIn: '<' };
  }
}

export class NavbarComponentController implements ng.IComponentController {
  public isLoggedIn: boolean;

  $onInit() {}
}
