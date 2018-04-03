import * as angular from "angular";

/**
 * Import Module Components
 */
import { App } from './components/app/app.component';
import { Root } from './components/root/root.component';

/**
 * Import Module Configuration
 */
import { configuration } from './core.configuration';
import { routing } from './core.routes';

export const coreModule =
  angular
    .module('app.core', [])
    .component(App.NAME, App)
    .component(Root.NAME, Root)
    .config(configuration)
    .config(routing)
    .name;
