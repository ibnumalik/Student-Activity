import './parking.component.scss';
import { Injectable, IControllerConstructor } from 'angular';
import { StateService } from '@uirouter/angularjs';

export class ParkingComponent implements ng.IComponentOptions {
  static NAME: string = 'parkingComponent';
  public template: string;
  public controller: Injectable<IControllerConstructor>;

  constructor() {
    this.template = require('./parking.component.html');
    this.controller = ParkingComponentController;
  }
}

export class ParkingComponentController implements ng.IComponentController {
  public groupedParkingSpaces: any[];
  private spaceSelected;
  private parking;

  constructor(private ParkingService, private $state: StateService) {
    'ngInject';
  }

  $onInit() {
    this.ParkingService.getAll().then((response: ParkingResponse) => {
      this.groupParkingBlock(response.data);
    });
  }

  continue() {
    this.$state.go('app.dashboard.parkingPayment', {
      parkingId: this.spaceSelected.id,
    });
  }

  groupParkingBlock(parking: Parking[]) {
    this.parking = parking;

    this.groupedParkingSpaces = parking.reduce((r, a) => {
      r[a.block_name] = r[a.block_name] || [];
      r[a.block_name].push(a);
      return r;
    }, Object.create(null));
  }
}

interface ParkingResponse {
  status: string;
  data: Parking[];
}

interface Parking {
  id: string;
  block_name: string;
  space_number: string;
  rented: 'false' | 'true';
}
