import { App } from "./components/app/app.component";

export const routing = ($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) => {
  'ngInject';

  $stateProvider
    .state('app', {
      url: '/app',
      component: App.NAME
    });

  $urlRouterProvider.otherwise('/app');
}