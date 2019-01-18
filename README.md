# NgrxSample Application

![build status](https://app.buddy.works/bonejon/ngrx-sample/pipelines/pipeline/167408/badge.svg?token=9cf3211cabe7eb3705d6abef5ce7a219b747cf28416d68e7b9c8ad76ae079aab)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.

The purpose of this project is to demonstrate a clean PoC application using angular and ngrx for state management. 
There are two styles of state management in use. Within the CommonState application metadata is cached by using the
withLatestFrom pipe to determine whether the metadata exists within the state if not then a service is called to load
the data and the reducer will update the state.

The CartState uses a more traditional application flow to add, update, remove, and clear a shopping cart that could be submitted
to the server on user request. 

Both states have full tests round the actions, effects, and reducers to ensure correctness and functionality.

## Installing dependencies

The project dependencies are managed by `yarn`, so ensure you have the latest version installed and run `yarn` in the root directory.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

For a full pipeline build including linting and testing run `npm run build`. This will build the output to the `dist/` directory with
full AOT and treeshaking.

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

Log a github issue within the repository [NgrxSample Application GitHub](https://github.com/bonejon/ngrx-sample/issues)
