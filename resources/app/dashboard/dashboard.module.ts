import * as angular from "angular";

/**
 * Import Module Components
 */
import { DashboardComponent } from './dashboard.component';
import { TranscriptComponent } from './components/transcript/transcript.component';
import { SeminarComponent } from './components/seminar/seminar.component';
import { ParkingComponent } from './components/parking/parking.component';
import { ParkingPaymentComponent } from './components/parking/payment/payment.component';

/**
 * Import Module Configuration
 */
import { routing } from './dashboard.routes';
import { StudentComponent } from "./components/student/student.component";
import { ParkingService } from './components/parking/parking.service';
import { ParkingReceiptComponent } from "./components/parking/receipt/receipt.component";
import { TranscriptPaymentComponent } from "./components/transcript/payment/payment.component";

export const dashboardModule =
  angular
    .module('app.dashboard', [])

    /**
     * Register Module Component
     */
    .component(DashboardComponent.NAME, new DashboardComponent)
    .component(StudentComponent.NAME, new StudentComponent)
    .component(ParkingComponent.NAME, new ParkingComponent)
    .component(ParkingPaymentComponent.NAME, new ParkingPaymentComponent)
    .component(ParkingReceiptComponent.NAME, new ParkingReceiptComponent)
    .component(SeminarComponent.NAME, new SeminarComponent)
    .component(TranscriptComponent.NAME, new TranscriptComponent)
    .component(TranscriptPaymentComponent.NAME, new TranscriptPaymentComponent)

    /**
     * Register Module Configuration
     */
    .config(routing)

    /**
     * Register Factory Service
     */
    .factory(ParkingService.NAME, ParkingService.factory())


    .name;
