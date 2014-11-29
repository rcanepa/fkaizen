(function() {

  'use strict';

  angular
    .module('fkaizen.layout.controllers')
    .controller('NavBarController', NavBarController);

  NavBarController.$inject = ['$scope', 'Auth'];

  function NavBarController($scope, Auth) {

    var vm = this;

    vm.title = 'Welcome to the Financial Kaizen';

    vm.logout = logout;

    activate();

    function activate() {

    }

    function logout() {

      console.log('I am logging out!');
      Auth.logout();

    }

  }
})();
