export class LoginComponent implements ng.IComponentOptions {
  static NAME:string = 'appLogin';
  template: any;
  controllerAs:string;
  controller;

  constructor() {
    this.template = require('./login.component.html');
    this.controllerAs = '$ctrl';
    this.controller = LoginController;
  }
}

class LoginController implements ng.IComponentController {
  static $inject = ['$http'];
  title: string;
  user;

  constructor(private http: ng.IHttpService) {
    this.title = "Login Page";
    this.user = {};
  }

  login() {
    this.http.post('http://local.studentapi.com/api/login', this.user, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }).then(response => {
      console.log(response);
    });
  }
}