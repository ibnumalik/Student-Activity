import { SeminarComponent } from './components/seminar/seminar.component';
import { ParkingComponent } from './components/parking/parking.component';
import { StudentComponent } from './components/student/student.component';
import { DashboardComponent } from "./dashboard.component";
import { TranscriptComponent } from './components/transcript/transcript.component';

export const routing = ($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) => {
  'ngInject';

  $stateProvider
    .state('app.dashboard', {
      url: '/dashboard',
      abstract: true,
      component: DashboardComponent.NAME
    })
    .state('app.dashboard.student', {
      url: '/student',
      component: StudentComponent.NAME
    })
    .state('app.dashboard.parking', {
      url: '/parking',
      component: ParkingComponent.NAME
    })
    .state('app.dashboard.seminar', {
      url: '/seminar',
      component: SeminarComponent.NAME
    })
    .state('app.dashboard.transcript', {
      url: '/transcript',
      component: TranscriptComponent.NAME
    });

  $urlRouterProvider.otherwise('/app');
}