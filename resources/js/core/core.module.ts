import { NavbarComponent } from './components/header/nav.component';
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
    .component(App.NAME, new App)
    .component(Root.NAME, new Root)
    .component(NavbarComponent.NAME, new NavbarComponent)
    .config(configuration)
    .config(routing)
    .name;
