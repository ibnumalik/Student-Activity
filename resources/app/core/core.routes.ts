import { App } from './components/app/app.component';
import { StateProvider, UrlRouterProvider } from '@uirouter/angularjs';

export const routing = (
  $stateProvider: StateProvider,
  $urlRouterProvider: UrlRouterProvider
) => {
  'ngInject';

  $stateProvider.state('app', {
    url: '/app',
    component: App.NAME,
  });

  $urlRouterProvider.otherwise('/app');
};
