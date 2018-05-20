import { IWindowService } from 'angular';
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
            $transition$: '<'
        };
    }
}

export class ParkingPaymentController implements ng.IComponentController {
    private spaceSelected;
    private parking;
    private selectedParking;
    private backUrl;
    private $transition$;

    constructor(
        private ParkingService,
        private $mdDialog: ng.material.IDialogService,
        private $timeout: ng.ITimeoutService,
        private $state: ng.ui.IStateService
    ) { 'ngInject' }

    $onInit() {
        this.backUrl = this.$transition$.from().name || 'app.dashboard.parking';
        this.selectedParking = this.parking.data[0];
    }

    initiatePayment() {
        this.$mdDialog.show({
            template: `
                <md-dialog>
                    <md-dialog-content class="gateway">
                        <p>Processing payment...</p>
                        <div class="loader"></div>
                    </md-dialog-content>
                </md-dialog>
            `
        });

        this.$timeout(() => this.postPayment() , 1000);
    }

    postPayment() {
        this.$mdDialog.hide();

        this.ParkingService.rentSpace({ id: this.selectedParking.id })
            .then(response => {
                console.log(response);
            });

        this.$state.go('app.dashboard.parkingReceipt');
    }
}