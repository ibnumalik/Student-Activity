import { IHttpResponse } from "angular";

export interface ResponseRegister extends IHttpResponse<object> {
  data: {
    data: {
      message: string;
    };
    status: string;
  };
}

export class RegisterComponent implements ng.IComponentOptions {
  static NAME: string = 'appRegister';
  template: any;
  controllerAs: string;
  controller;

  constructor() {
    this.template = require('./register.component.html');
    this.controllerAs = '$ctrl';
    this.controller = RegisterController;
  }
}

class RegisterController implements ng.IComponentController {
  static $inject = ['$http', '$state', '$httpParamSerializerJQLike'];
  title: string;
  user;
  emailUsed = false;

  constructor(
    private http: ng.IHttpService,
    private $state: ng.ui.IStateService,
    private httpParamSerializerJQLike: ng.IHttpParamSerializer
  ) {
    this.title = "Register Page";
    this.user = {};
  }

  register() {
    this.http.post(
      'http://localhost:8080/api/register',
      this.httpParamSerializerJQLike(this.user),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    ).then(response => {
      console.log(response.data);

      if (response.data === 'email already used') {
        this.emailUsed = true;
        return;
      }

      if (response.data['status'] === 'success') {
        this.$state.go('app.auth.login');
      }
    })
  }
}