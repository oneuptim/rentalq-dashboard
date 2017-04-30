# `Rental Q Dashboard`


### Install Dependencies

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`. After that, you should find out that you have
two new folders in your project.

* `node_modules` - contains the npm packages for the tools we need to run Rental Q
* `app/bower_components` - contains the Angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
`angular-seed` changes this location through the `.bowerrc` file. Putting it in the `app` folder
makes it easier to serve the files by a web server.*

### Run the Application

We have preconfigured the project with a simple development web server. The simplest way to start
this server is:

```
npm start or sudo npm start
```

Now browse to the app at [`localhost:8000/][local-app-url].

[angularjs]: https://angularjs.org/
[bower]: http://bower.io/
[git]: https://git-scm.com/
[http-server]: https://github.com/indexzero/http-server
[jasmine]: https://jasmine.github.io/
[jdk]: https://wikipedia.org/wiki/Java_Development_Kit
[jdk-download]: http://www.oracle.com/technetwork/java/javase/downloads
[karma]: https://karma-runner.github.io/
[local-app-url]: http://localhost:8000/index.html
[node]: https://nodejs.org/
[npm]: https://www.npmjs.org/
[protractor]: http://www.protractortest.org/
[selenium]: http://docs.seleniumhq.org/
[travis]: https://travis-ci.org/
[travis-docs]: https://docs.travis-ci.com/user/getting-started

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0.

To use the project with angular-cli, install it:

    npm install -g angular-cli

Then install dependendencies with:

    npm install

# Backand

Uses `angular2-sdk`. See [angular2-sdk](https://github.com/backand/angular2-sdk) about required dependencies.

# App Structure

The app structure is the standard Angular JS 2 structure. The app code is the `src` folder. The app starts `AppModule` from `app.modulet.ts`, and does a bootstrap of `AppComponent` from `app.componenet.ts`. The app uses a Router, and constructs the routes in `app-routing.modules.ts`.

AppComponent shows a navigation bar, and using `router-outlet` switches views.

Layout of app is done using SASS.

Using angular-cli, we generate screens with:

    ng generate component my-new-component

Each screen forms a folder under `src` with four files:

* `ts` - typescript component
* `html` - html template
* `scss` - SASS for styling of template
* `spec.ts` - tests

## Components

### Login

Sign in to Backand using username and password, or with anonymous token.

## Sign Up

1. Sign up to Backand
2. Sign up using Facebook/Twitter/Google/GitHub

### CRUD

CRUD operation on your model in Backand

Including:

Get items
Post items
Filter items

### Files

Upload files to Backand storage
