import * as angular from "angular";
import '@uirouter/angularjs';
import 'angular-material';

/**
 * Import Module for app
 */
import { coreModule } from './core/core.module';
import { authModule } from './auth/auth.module';

export const appModule =
  angular.module('app', [
    'ui.router',
    'ngMaterial',
    coreModule,
    authModule
  ]).name;
