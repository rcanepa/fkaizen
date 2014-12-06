(function() {

  'use strict';

  angular
    .module('fkaizen.categories.controllers')
    .controller('CategoriesController', CategoriesController);

  CategoriesController.$inject = ['$scope', '$location', 'Categories'];

  function CategoriesController($scope, $location, Categories) {

    var vm = this;
    vm.categories = [];

    activate();

    function activate() {
      Categories.all().
        then(function(response) {
          vm.categories = response.data;
        })
        .catch(function(response) {
          console.log(response);
        });
    }

  }
})();
