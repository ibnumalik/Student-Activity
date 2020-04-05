// Make async await play nice in AngularJS
// As seen here https://debuggerdotbreak.judahgabriel.com/2017/04/24/making-typescript-asyncawait-play-nice-with-angularjs-1-x/
export const AsyncAwaitAdapter = function ($q) {
  'ngInject';
  window['Promise'] = $q;
};
