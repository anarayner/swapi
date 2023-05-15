# Star Wars Universe Web Application

This project is a frontend application written in [Angular CLI](https://github.com/angular/angular-cli) using [Angular Material](https://material.angular.io/), NgRx, and Jest.
The project is a web application that interacts with the SWAPI API (Star Wars API) and displays the retrieved data. It provides the following functionality:

## Features

- User registration and authentication using JWT.
- Displaying a list of films and characters from the Star Wars universe
- Pagination support for browsing through large lists of characters.
- Search functionality to find specific characters by name.
- Viewing details of characters, including their films, planets, and vehicles. Each category has links to the details of other related categories, allowing users to navigate seamlessly between different aspects of the Star Wars universe.
- Personal user profile.
- Reusable Components: card, card list, details page
- Custom Directives

## Deployment

The application is deployed and can be accessed at [https://fancy-starlight-fdcd2b.netlify.app/](https://fancy-starlight-fdcd2b.netlify.app/).

## Backend Repository

The backend code for the application is available on GitHub at [https://github.com/anarayner/jwt-auth](https://github.com/anarayner/jwt-auth). It provides the necessary API endpoints for authentication and data retrieval.

## Getting Started
To get started with the project, follow these steps:

1. Clone the repository: `git clone https://github.com/anarayner/swapi.git`
2. Navigate to the project directory: `cd swapi`
3. Install the dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your browser and visit http://localhost:4200


## Contributing
Contributions to the project are welcome. Feel free to open issues or submit pull requests with improvements, bug fixes, or new features.
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Jest](https://jestjs.io/).
