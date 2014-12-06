(function() {

  'use strict';

  angular
    .module('fkaizen.routes')
    .config(config);

  config.$inject = ['$routeProvider'];

  function config($routeProvider) {

    $routeProvider.when('/register', {
      controller: 'RegisterController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/authentication/register.html'
    }).when('/login', {
      controller: 'LoginController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/auth/login.html'
    }).when('/', {
      controller: 'IndexController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/layout/index.html'
    }).when('/categories', {
      controller: 'CategoriesController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/categories/index.html'
    }).when('/+:username', {
      controller: 'ProfileController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/profiles/profile.html'
    }).when('/+:username/settings', {
      controller: 'ProfileSettingsController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/profiles/settings.html'
    }).otherwise('/');

  }

})();
