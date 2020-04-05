import './app.component.scss';
import { AuthService } from '../../../auth/services/auth.service';
import { StateService, TransitionService } from '@uirouter/angularjs';
import { Injectable, IControllerConstructor } from 'angular';

export class App implements ng.IComponentOptions {
  static NAME: string = 'app';
  template: string;
  controller: Injectable<IControllerConstructor>;

  constructor() {
    this.template = require('./app.component.html');
    this.controller = AppController;
  }
}

export class AppController implements ng.IComponentController {
  public isLoggedIn: boolean;

  constructor(
    private $scope: ng.IScope,
    private AuthService: AuthService,
    private $state: StateService,
    private $transitions: TransitionService
  ) {
    'ngInject';
  }

  $onInit() {
    this.AuthService.isLoggedIn().then((state: boolean) => {
      this.updateAuthState(state);
      this.checkCorrectRoute(this.$state);
    });

    this.$transitions.onStart({ to: 'app' }, (transition) => {
      const $state = transition.router.stateService;

      this.checkCorrectRoute($state);
    });
  }

  /**
   * Redirect to the correct auth state.
   */
  checkCorrectRoute($state: StateService) {
    if (this.isLoggedIn) {
      return $state.transitionTo('app.dashboard.student');
    }

    return $state.transitionTo('auth.login');
  }

  /**
   * Listen to `isLoggedIn` event and update state.
   */
  updateAuthState(state: boolean) {
    this.isLoggedIn = state;

    this.$scope.$on('isLoggedIn', (event, state) => {
      this.isLoggedIn = state;
    });
  }
}
