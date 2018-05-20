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

        this.ParkingService.rentSpace({ id: this.selectedParking.id })
            .then(response => {
                this.$mdDialog.hide();

                /**
                 * Show error when parking space is taken
                 */
                if (response.status === 'fail') {
                    return this.$mdDialog.show(
                        this.$mdDialog.alert()
                            .htmlContent(`
                                <h2 class="flex vertical-center md-title md-title-error">
                                    <span class="material-icons">error</span>
                                    <span class="md-title-error-text">Error</span>
                                </h2>
                                <p>The parking space has been taken!</p>
                            `)
                            .ok('OK')
                    );
                }

                this.redirectToReceipt();
            });
    }

    redirectToReceipt() {
        this.$state.go('app.dashboard.parkingReceipt');
    }
}