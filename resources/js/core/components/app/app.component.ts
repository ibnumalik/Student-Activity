import './app.component.scss';

export class App implements ng.IComponentOptions {
  static NAME: string = 'app';
  static template = '<p>App component works!</p>';

  constructor() {}
}