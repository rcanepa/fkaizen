(function() {

  'use strict';

  angular
    .module('fkaizen.categories.services')
    .factory('Categories', Categories);

  Categories.$inject = ['$http'];

  function Categories($http) {

    var Categories = {
      all: all,
      create: create
    };

    return Categories;

    function all() {
      return $http.get('/api/categories/');
    }

    function create(content) {
      return $http.post('/api/categories/', {
        content: content
      });
    }

    /*function get(username) {
      return $http.get('/api/v1/users/' + username + '/posts/');
    }*/

  }

})();
