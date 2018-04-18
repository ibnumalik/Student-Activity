import './nav.component.scss';

export class NavbarComponent implements ng.IComponentOptions {
  static NAME:string = 'navbar';
  template:any;

  constructor() {
    this.template = require('./nav.component.html');
  }
}