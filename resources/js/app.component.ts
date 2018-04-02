class AppController implements ng.IController {

}

export class AppComponent implements ng.IComponentOptions {
  static NAME: string = 'appView';
  controller: any;
  template:any;

  constructor() {
    this.controller = AppController;
    this.template = `<h1>Hello world and planet!</h1>`;
  }
}