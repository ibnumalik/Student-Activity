import './seminar.component.scss';
import { Injectable, IControllerConstructor } from 'angular';

export class SeminarComponent implements ng.IComponentOptions {
  static NAME: string = 'seminarComponent';
  template: string;
  controller: Injectable<IControllerConstructor>;

  constructor() {
    this.template = require('./seminar.component.html');
    this.controller = SeminarComponentController;
  }
}

export class SeminarComponentController implements ng.IComponentController {}
