import './app.component.scss';

export class App implements ng.IComponentOptions {
  static NAME:string = 'app';
  template;

  constructor() {
    this.template = require('./app.component.html');
  }
}