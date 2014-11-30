(function() {

  'use strict';

  angular
    .module('fkaizen.auth.controllers')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['$location', '$scope', 'Auth'];

  function LoginController($location, $scope, Auth) {
    var vm = this;

    vm.login = login;

    activate();

    function activate() {
      if (Auth.isAuthenticated()) {
        $location.url('/');
      }
    }

    function login() {
      Auth.login(vm.username, vm.password, successfulLogin, failedLoginAttempt);

      function successfulLogin(authResponse) {
        console.log('From the service:', authResponse);
        Auth.setAuthenticatedUser(authResponse);
        window.location = '/';
        return authResponse;
      }

      function failedLoginAttempt(authResponse) {
        vm.error = authResponse.data.error;
      }
    }

  }

})();
