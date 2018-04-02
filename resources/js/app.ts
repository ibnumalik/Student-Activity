import * as angular from 'angular';
import '@uirouter/angularjs';
import { UrlRouterProvider, StateProvider } from '@uirouter/angularjs';
import { AppComponent } from "./app.component";

const App: ng.IModule = angular
  .module('studentPortals', [
    'ui.router',
  ])
  .config(routeConfig)
  .component(AppComponent.NAME, new AppComponent)


function routeConfig(
  $locationProvider: ng.ILocationProvider,
  $urlRouterProvider: UrlRouterProvider,
  $stateProvider: StateProvider
) {
  'ngInject';

  $stateProvider
    .state({
      name: 'app',
      url: '/',
      component: AppComponent.NAME
    });
  $urlRouterProvider.otherwise('/');
}

angular.element(document).ready(() => {
  angular.bootstrap(document, ['studentPortals']);
});

export default App.name;