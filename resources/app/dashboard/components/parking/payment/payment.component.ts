import { ParkingService } from './../parking.service';
import './payment.component.scss';

export class ParkingPaymentComponent implements ng.IComponentOptions {
    static NAME = 'parkingPaymentComponent';
    public template;
    public controller;
    public bindings;

    constructor() {
        this.template = require('./payment.component.html');
        this.controller = ParkingPaymentController;
        this.bindings = {
            parking: '<',
            from: '<'
        };
    }
}

export class ParkingPaymentController implements ng.IComponentController {
    private spaceSelected;
    private parking;
    private selectedParking;
    private from;
    private backUrl;

    constructor(private ParkingService) { 'ngInject' }

    $onInit() {
        this.backUrl = this.from.name || 'app.dashboard.parking';
        this.selectedParking = this.parking.data[0];
    }

    pay() {
        this.ParkingService.rentSpace({ id: this.spaceSelected.id })
        .then(response => {
          console.log(response);
        });
    }
}