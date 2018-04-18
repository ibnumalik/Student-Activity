import './parking.component.scss'

export class ParkingComponent implements ng.IComponentOptions {
  static NAME:string = 'parkingComponent';
  template: string;
  controller;

  constructor() {
    this.template = require('./parking.component.html');
    this.controller = ParkingComponentController
  }
}

export class ParkingComponentController implements ng.IComponentController {

  constructor() {}

}