import * as angular from "angular";

/**
 * Import Module Components
 */
// import { NavbarComponent } from './components/header/nav.component';


/**
 * Import Module Service
 */

 import { StorageService } from "./storage.service";
import { FormOnChange } from "./form-on-change.directive";

/**
 * Import Module Configuration
 */
// import { routing } from './core.routes';

export const commonModule =
  angular
    .module('app.common', [])

    /**
     * Register Module Service
     */
    .factory(StorageService.NAME, StorageService.factory())

     /**
     * Register Module Directive
     */
    .directive(FormOnChange.NAME, FormOnChange.factory())
    .name;