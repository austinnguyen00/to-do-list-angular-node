# To-do-list-Angular-Node

A simple to-do-list app built with Angular and Nodejs and deployed on Firebase. The front-end design is based on the task tracker app tutorial built by Traversy Media.

## Application

The application is hosted at [https://to-do-list-angular-node-b8f78.web.app/](https://to-do-list-angular-node-b8f78.web.app/) with Firebase hosting.

- The admin endpoint is at /admin with no authentication required at the moment showing the list of signup users.

The backend function is served at [https://us-central1-to-do-list-angular-node-b8f78.cloudfunctions.net/app] with Firebase functions.  
The documentation of how to deploy the application to Firebase is available [here](https://docs.google.com/document/d/1P4BUtkP4N60MKp9OGLhA8Y_SF3RdL33i/edit?usp=sharing&ouid=109258588696386585052&rtpof=true&sd=true).

## Tech Stack

### Frontend

- Angular
- Typescript
- Scss

### Backend

- NodeJS/ExpressJS
- Auth0 - for user authentication
- Neon.tech - third-party PostgreSQL service - [https://neon.tech/](https://neon.tech/)
- Google translate API - for translation of texts

## Development server

If you want to run this application locally, first clone this repo using the command:  
`git clone https://github.com/austinnguyen00/to-do-list-angular-node.git`  
and following the steps below

### Frontend - Angular

Run `ng serve` for Angular dev server at the root directory.
Navigate to [http://localhost:4200/](http://localhost:4200/).
The application will automatically reload if you change any of the source files.

### Backend - Nodejs

Go to the server folder and run `npm run start` to start the backend node server.  
The backend will be available at [http://localhost:5000/](http://localhost:5000/)

## Production build

Run `ng build --configuration production` to build the project.
The built code will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
