// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  endpoint: "http://127.0.0.1:7762",
  firebase:{
    apiKey: "AIzaSyBYsO2FQUGwRjucjYOSXGG9zs7DXFbfQ_o",
    authDomain: "trello-server-326e2.firebaseapp.com",
    databaseURL: "https://trello-server-326e2.firebaseio.com",
    projectId: "trello-server-326e2",
    storageBucket: "trello-server-326e2.appspot.com",
    messagingSenderId: "88335362408",
    appId: "1:88335362408:web:b9990ca05a25de24de0edd",
    measurementId: "G-SF09JZ5EBE"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
