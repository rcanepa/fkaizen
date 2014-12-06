(function() {

  'use strict';

  angular
    .module('fkaizen.layout.controllers')
    .controller('NavBarController', NavBarController);

  NavBarController.$inject = ['$scope', 'Auth'];

  function NavBarController($scope, Auth) {

    var vm = this;
    vm.title = 'Financial Kaizen';
    vm.logout = logout;

    activate();

    function activate() {
    }

    function logout() {
      Auth.logout();
    }

  }
})();
