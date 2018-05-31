import { Transition, StateService } from "@uirouter/angularjs";
import { ParkingService } from './../parking.service';
import './receipt.component.scss';

export class ParkingReceiptComponent implements ng.IComponentOptions {
    static NAME = 'parkingReceiptComponent';
    public bindings;
    public controller;
    public template;

    constructor() {
        this.bindings = {
            $transition$: '<'
        };
        this.controller = ParkingReceiptController;
        this.template = require('./receipt.component.html');
    }
}

export class ParkingReceiptController implements ng.IComponentController {
    private receipt;

    constructor(
        private ParkingService,
        private $state: StateService,
        private $transition$: Transition,
        private $window: ng.IWindowService
    ) { 'ngInject' }

    $onInit() {
        if (!this.getReceipt()) {
            this.$state.go('app.dashboard.student');
        }

        this.receipt = this.getReceipt();
        this.saveReceiptToStorage();
    }

    $onDestroy() {
        this.$window.localStorage.removeItem('receipt')
    }

    saveReceiptToStorage() {
        return this.$window.localStorage.setItem('receipt', this.receipt);
    }

    getReceipt() {
        return this.getReceiptFromStorage() || this.getReceiptFromParams();
    }

    getReceiptFromStorage() {
        return this.$window.localStorage.getItem('receipt');
    }

    getReceiptFromParams() {
        return this.$transition$.params('to').receipt;
    }
}