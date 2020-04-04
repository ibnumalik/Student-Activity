/*
 * Import the global styles
 */
import '../sass/style.scss';

/*
 * Import angular
 */
import * as angular from 'angular';

/*
 * Import module to bootstrapped
 */
import { appModule } from './app.module';

/*
 * Register wide application module
 */
angular.module('boot', [appModule]).name;

/**
 * Boot up the app when the document is loaded
 */
angular.element(document).ready(() => {
  angular.bootstrap(document, ['boot'], {
    strictDi: true,
  });
});
