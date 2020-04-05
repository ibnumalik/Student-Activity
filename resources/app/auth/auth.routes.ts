import { StateProvider } from '@uirouter/angularjs';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LogoutComponent } from './components/logout/logout.component';

export const routing = ($stateProvider: StateProvider) => {
  'ngInject';

  $stateProvider
    .state('auth', {
      abstract: true,
      component: AuthComponent.NAME,
    })
    .state('auth.login', {
      url: '/login',
      component: LoginComponent.NAME,
    })
    .state('auth.register', {
      url: '/register',
      component: RegisterComponent.NAME,
    })
    .state('logout', {
      url: '/logout',
      component: LogoutComponent.NAME,
    });
};
