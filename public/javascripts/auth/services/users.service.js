(function() {
  angular.module('fkaizen.auth.services')
    .service('Users', function($http) {
      var Users = {
        all: function() {
          return $http.get('/api/v1/users/');
        }
      };

      return Users;
    });
})();
