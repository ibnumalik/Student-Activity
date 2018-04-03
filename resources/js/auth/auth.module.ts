import * as angular from "angular";

/**
 * Import Module Components
 */
import { AuthComponent } from "./auth.component";
import { LoginComponent } from "./components/login/login.component";


/**
 * Import Module Configuration
 */
import { routing } from './auth.routes';

export const authModule =
  angular
    .module('app.auth', [])

    /**
     * Register Module Component
     */
    .component(AuthComponent.NAME, new AuthComponent)
    .component(LoginComponent.NAME, new LoginComponent)

    /**
     * Register Module Configuration
     */
    .config(routing)
    .name;
