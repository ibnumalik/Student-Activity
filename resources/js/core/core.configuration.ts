export const configuration = ($locationProvider: ng.ILocationProvider) => {
  'ngInject';

  $locationProvider.hashPrefix('');
}