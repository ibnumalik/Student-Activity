import { commonModule } from './common/common.module';
import * as angular from "angular";
import '@uirouter/angularjs';
import 'angular-material';
import 'angular-messages';
import 'angular-sanitize';
import 'ngSelect';

/**
 * Import Module for app
 */
import { coreModule } from './core/core.module';
import { authModule } from './auth/auth.module';
import { dashboardModule } from './dashboard/dashboard.module';

export const appModule =
  angular.module('app', [
    'ui.router',
    'ngMaterial',
    'ngMessages',
    'ngSelect',
    'ngSanitize',
    coreModule,
    commonModule,
    authModule,
    dashboardModule
  ]).name;
