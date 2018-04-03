import * as angular from "angular";
import '@uirouter/angularjs';
import 'angular-material';

/**
 * import module for app
 */
import { coreModule } from './core/core.module';

export const appModule =
  angular.module('app', [
    'ui.router',
    'ngMaterial',
    coreModule
  ]).name;
