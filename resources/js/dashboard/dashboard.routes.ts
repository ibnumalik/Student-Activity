import { StudentComponent } from './components/student/student.component';
import { DashboardComponent } from "./dashboard.component";

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
    });

  $urlRouterProvider.otherwise('/app');
}