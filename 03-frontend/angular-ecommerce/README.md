# AngularEcommerce

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.8.

## Web Storage API

The API works the same for **session storage** (shared across all the tabs and persistent) or **local storage** (one for each tab)

- Key and value are always strings.
- Store item ------> `storage.setItem(key, value)`
- Retrieve item ---> `storage.getItem(key)`
- Session storage ---> Once a web browser tab is closed then data is no longer available.
- Local storage -----> data is persisted and survives browser restarts.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
