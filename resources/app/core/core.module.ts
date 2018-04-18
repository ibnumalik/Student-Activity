import * as angular from "angular";

/**
 * Import Module Components
 */
import { App } from './components/app/app.component';
import { Root } from './components/root/root.component';
import { NavbarComponent } from './components/header/nav.component';

/**
 * Import Module Configuration
 */
import { configuration } from './core.configuration';
import { routing } from './core.routes';

export const coreModule =
  angular
    .module('app.core', [])

    /**
     * Register Module Component
     */
    .component(App.NAME, new App)
    .component(Root.NAME, new Root)
    .component(NavbarComponent.NAME, new NavbarComponent)

    /**
     * Register Module Configuration
     */
    .config(configuration)
    .config(routing)
    .name;
