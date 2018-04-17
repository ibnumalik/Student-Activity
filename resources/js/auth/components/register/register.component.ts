export class RegisterComponent implements ng.IComponentOptions {
  static NAME:string = 'appRegister';
  template: any;
  controllerAs:string;
  controller;

  constructor() {
    this.template = require('./register.component.html');
    this.controllerAs = '$ctrl';
    this.controller = RegisterController;
  }
}

class RegisterController implements ng.IComponentController {
  static $inject = ['$http'];
  title: string;
  user;

  constructor(private http: ng.IHttpService) {
    this.title = "Register Page";
    this.user = {};
  }
}