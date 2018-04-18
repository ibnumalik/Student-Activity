import { ParkingComponent } from './components/parking/parking.component';
import * as angular from "angular";

/**
 * Import Module Components
 */
import { DashboardComponent } from './dashboard.component';

/**
 * Import Module Configuration
 */
import { routing } from './dashboard.routes';
import { StudentComponent } from "./components/student/student.component";

export const dashboardModule =
  angular
    .module('app.dashboard', [])

    /**
     * Register Module Component
     */
    .component(DashboardComponent.NAME, new DashboardComponent)
    .component(StudentComponent.NAME, new StudentComponent)
    .component(ParkingComponent.NAME, new ParkingComponent)

    /**
     * Register Module Configuration
     */
    .config(routing)
    .name;
