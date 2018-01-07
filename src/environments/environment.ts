// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

//firebase embed goes here and in environments.prod
// shold provide a connection to the registered firebase project
export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDCjMteBE0_M3Y-1VXCjxkVctzaUSBAzMI',
    authDomain: 'global-chat-a1e99.firebaseapp.com',
    databaseURL: 'https://global-chat-a1e99.firebaseio.com',
    projectId: 'global-chat-a1e99',
    storageBucket: '',
    messagingSenderId: '394159021987'
  }
};
