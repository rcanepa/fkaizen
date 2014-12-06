(function() {

  'use strict';

  angular
    .module('fkaizen.layout.controllers')
    .controller('IndexController', IndexController);

  IndexController.$inject = ['$scope', '$location'];

  function IndexController($scope, $location) {

    var vm = this;
    vm.dummy = 'I am a dummy var!';
    vm.absUrl = $location.absUrl();

    activate();

    function activate() {
    }

  }
})();
