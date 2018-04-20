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
  static $inject = ['$http', '$state', '$httpParamSerializerJQLike'];
  title: string;
  user;
  error = false;

  constructor(
    private http: ng.IHttpService,
    private $state: ng.ui.IStateService,
    private httpParamSerializerJQLike: ng.IHttpParamSerializer
  ) {
    this.title = "Login Page";
    this.user = {};
  }

  login() {
    this.http.post(
      'http://localhost:8080/api/login',
      this.httpParamSerializerJQLike(this.user),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      }
    ).then(response => {
      if (response.data['status'] === 'success') {
        this.$state.go('app.dashboard.student');
      } else {
        this.error = true;
      }
    });
  }
}