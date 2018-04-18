import './seminar.component.scss'

export class SeminarComponent implements ng.IComponentOptions {
  static NAME:string = 'seminarComponent';
  template: string;
  controller;

  constructor() {
    this.template = require('./seminar.component.html');
    this.controller = SeminarComponentController
  }
}

export class SeminarComponentController implements ng.IComponentController {

  constructor() {}

}