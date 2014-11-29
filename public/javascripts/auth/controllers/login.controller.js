(function() {

  'use strict';

  angular
    .module('fkaizen.auth.controllers')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['$location', '$scope'];

  function LoginController($location, $scope) {
    var vm = this;

    vm.login = login;

    activate();

    function activate() {

      // If the user is authenticated, they should not be here.
      /*if (Auth.isAuthenticated()) {
        $location.url('/');
      }*/

    }

    function login() {

      //Auth.login(vm.username, vm.password);
      console.log('Log in button clicked!');

    }

  }

})();
