import { AuthComponent } from "./auth.component";
import { LoginComponent } from "./components/login/login.component";

export const routing = ($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) => {
  'ngInject';

  $stateProvider
    .state('app.auth', {
      abstract: true,
      url: '/auth',
      component: AuthComponent.NAME
    })
    .state('app.auth.login', {
      url: '/login',
      component: LoginComponent.NAME
    });

}