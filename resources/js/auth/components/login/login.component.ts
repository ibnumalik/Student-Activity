export class LoginComponent implements ng.IComponentOptions {
  static NAME:string = 'appLogin';
  template: any;

  constructor() {
    this.template = require('./login.component.html');
  }
}