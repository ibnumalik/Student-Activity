import './receipt.component.scss';

export class ParkingReceiptComponent implements ng.IComponentOptions {
    static NAME = 'parkingReceiptComponent';
    public template;
    public controller;

    constructor() {
        this.template = require('./receipt.component.html');
        this.controller = ParkingReceiptController;
    }
}

export class ParkingReceiptController implements ng.IComponentController {
    private receiptId;

    constructor() {}

    $onInit() {
        this.receiptId = this.generateReceiptId() + this.generateReceiptId();
    }

    generateReceiptId() {
        return Math.random().toString(36).substring(2);
    }
}