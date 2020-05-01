# MainWebsite

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

To build for Github Pages run `ng build --prod --output-path docs --base-href /<project_name>/` and replace project name with mainWebsite. `ng build --prod --output-path docs --base-href mainWebsite`  

Also make sure to configure in the repository's settings that it should publish from the docs folder.  

## Refresh Error Fix

Quoting this [video](https://www.youtube.com/watch?v=dlPwcNcMv04), add `import { HashLocationStrategy, LocationStrategy } from '@angular/common';` to app.module.ts, replace providers with `providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],` and replace `<base href="mainWebsite">` with `<base href="./index.html">` in the compiled index.html.

## To Do:  

Add 404 routing & component.
Modularity of tables: `https://jsonworld.com/demo/how-to-read-local-json-file-in-angular`

## Wishlist To Do:  

Add Study Section w/ Youtube playlist links.
Tinker with some backend to maybe add email form to contact-info page.
Tinker with RestAPI so I can streamline adding repo list to projects, can be used for listing descriptions as well.

## Useful topics:  

[Multiple window workspace.](https://stackoverflow.com/questions/43362133/visual-studio-code-open-tab-in-new-window)