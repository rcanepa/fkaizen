window.angular.module('fkaizen.routes')
  .config(function ($routeProvider) {
    $routeProvider.when('/', {
      controller: 'IndexController',
      templateUrl: '/static/templates/static/index.html'
    });
  });
