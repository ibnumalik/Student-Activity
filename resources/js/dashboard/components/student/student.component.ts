import './student.component.scss'

export class StudentComponent implements ng.IComponentOptions {
  static NAME:string = 'studentComponent';
  template: string;
  controller;

  constructor() {
    this.template = require('./student.component.html');
    this.controller = StudentComponentController
  }
}

export class StudentComponentController implements ng.IComponentController {
}