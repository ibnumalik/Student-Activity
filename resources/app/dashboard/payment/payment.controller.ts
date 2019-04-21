import { IStorageService } from './../../common/storage.service';
import { StateService } from "@uirouter/angularjs";

export class PaymentController implements ng.IComponentController {
    private backUrl;
    private $transition$;
    private receipt;
    private errorMessage;
    private receiptRoute;

    constructor(
        private $mdDialog: ng.material.IDialogService,
        private $state: StateService
    ) {}

    $onInit() {
        this.backUrl = this.$transition$.from().name || 'app.dashboard.parking';
    }

    showProcessingDialog() {
        return this.$mdDialog.show({
            template: `
                <md-dialog>
                    <md-dialog-content class="gateway">
                        <p>Processing payment...</p>
                        <div class="loader"></div>
                    </md-dialog-content>
                </md-dialog>
            `
        });
    }

    showErrorDialog() {
        return this.$mdDialog.show(
            this.$mdDialog.alert()
                .htmlContent(`
                    <h2 class="flex vertical-center md-title md-title-error">
                        <span class="material-icons">error</span>
                        <span class="md-title-error-text">Error</span>
                    </h2>
                    <p>${this.errorMessage}</p>
                `)
                .ok('OK')
        );
    }

    initiatePayment() {
        this.showProcessingDialog();
    }

    redirectToReceipt() {
        this.$state.go(this.receiptRoute, {
            receipt: this.receipt
        });
    }
}

/*
1. $onInit
    - Get token from storage and set to 'token' binding
    - Set 'backUrl' from "previous transition" or if it didnt exist set to 'app.dashboard.parking'
    - Set 'selectedParking' from component binding called 'parking'
2. When pay button is clicked, `initiatePayment` is called
    - Show processing dialogboxes
    - Post API request to rent the space with form-data {id, token}
        - Then, if response is 200, hide the processing dialogboxes
            - If response status is fail, return error dialogboxes
            - Else, set 'receipt' to response data receipt
            - Redirect to receipt

What method/variable can be extracted to make it reusable?
-
*/