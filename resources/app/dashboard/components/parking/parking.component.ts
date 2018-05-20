import './parking.component.scss'

export class ParkingComponent implements ng.IComponentOptions {
  static NAME:string = 'parkingComponent';
  public template: string;
  public controller;

  constructor() {
    this.template = require('./parking.component.html');
    this.controller = ParkingComponentController
  }
}

export class ParkingComponentController implements ng.IComponentController {
  public parkingSpaces: any[];
  public groupedParkingSpaces: any[];

  constructor(private ParkingService) { 'ngInject' }

  $onInit() {
    this.ParkingService.getAll()
      .then(response => {
        this.parkingSpaces = response.data;

        this.groupParkingBlock();
      });
  }

  groupParkingBlock() {
    this.groupedParkingSpaces = this.parkingSpaces.reduce((r, a) => {
      r[a.block_name] = r[a.block_name] || [];
      r[a.block_name].push(a);

      return r;
    }, Object.create(null));
  }

}