(function() {

  'use strict';

  angular
    .module('fkaizen', [
      'fkaizen.config',
      'fkaizen.routes',
      'fkaizen.layout',
      'fkaizen.auth',
      'fkaizen.categories'
    ]);

  angular
    .module('fkaizen.config', []);

  angular
    .module('fkaizen.routes', ['ngRoute']);

  angular
    .module('fkaizen')
    .run(run);

  run.$inject = ['$http'];

  function run($http) {

    $http.defaults.xsrfHeaderName = 'X-CSRFToken';
    $http.defaults.xsrfCookieName = 'csrftoken';

  }

})();
