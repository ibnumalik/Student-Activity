export class Root implements ng.IComponentOptions {
  static NAME:string = 'appRoot';
  template: string;

  constructor() {
    this.template = '<div layout="column" ui-view></div>';
  }
}