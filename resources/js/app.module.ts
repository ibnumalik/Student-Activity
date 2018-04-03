import * as angular from "angular";
import '@uirouter/angularjs';

/**
 * import module for app
 */
import { coreModule } from './core/core.module';

export const appModule =
  angular.module('app', [
    'ui.router',
    coreModule
  ]).name;
