import { PaymentController } from './../../../payment/payment.controller';
import { IStorageService } from './../../../../common/storage.service';
import { StateService } from "@uirouter/angularjs";

import '../../parking/payment/payment.component.scss';

export class TranscriptPaymentComponent implements ng.IComponentOptions {
    static NAME = 'transcriptPaymentComponent';
    public template;
    public controller;
    public bindings;

    constructor() {
        this.template = require('../../parking/payment/payment.component.html');
        this.controller = TranscriptPaymentController;
        this.bindings = {
            $transition$: '<'
        };
    }
}

export class TranscriptPaymentController extends PaymentController implements ng.IComponentController {

    constructor(
        $mdDialog: ng.material.IDialogService,
        $state: StateService
    ) {
        'ngInject'
        super($mdDialog, $state);
    }

    $onInit() {}
}