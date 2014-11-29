(function() {

  'use strict';

  angular
    .module('fkaizen.layout.controllers')
    .controller('NavBarController', NavBarController);

  NavBarController.$inject = ['$scope'];

  function NavBarController($scope) {

    var vm = this;

    vm.title = 'Welcome to the Financial Kaizen';

    vm.logout = logout;

    activate();

    function activate() {

      console.log('From NavBarController');

    }

    function logout() {

      console.log('I am logging out!');

    }

  }
})();
