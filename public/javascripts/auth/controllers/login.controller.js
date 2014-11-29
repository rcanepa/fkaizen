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

      // If the user is authenticated, they should not be here.
      if (Auth.isAuthenticated()) {

        $location.url('/');

      }

    }

    function login() {

      Auth.login(vm.username, vm.password);

    }

  }

})();
