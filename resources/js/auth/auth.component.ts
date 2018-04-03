import './auth.component.scss'

export class AuthComponent implements ng.IComponentOptions {
  static NAME:string = 'authComponent';
  template: string;

  constructor() {
    this.template = `<div ui-view></div>`;
  }
}