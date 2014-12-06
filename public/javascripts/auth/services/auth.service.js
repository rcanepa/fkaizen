(function() {

  'use strict';

  angular
    .module('fkaizen.auth.services')
    .factory('Auth', Auth);

  Auth.$inject = ['$cookies', '$http'];

  function Auth($cookies, $http) {

    var Auth = {
      register: register,
      login: login,
      logout: logout,
      getAuthenticatedUser: getAuthenticatedUser,
      isAuthenticated: isAuthenticated,
      setAuthenticatedUser: setAuthenticatedUser,
      unAuthenticate: unAuthenticate
    };

    return Auth;

    function register(username, password, email) {
      return $http.post('/api/users/', {
        username: username,
        password: password,
        email: email
      }).then(registerSuccessFn, registerErrorFn);
    }

    function registerSuccessFn(data, status, headers, config) {
      Auth.login(username, password);
    }

    function registerErrorFn(data, status, headers, config) {
      console.error('Epic failure!');
    }

    function logout() {

      return $http.post('/api/auth/logout/')
        .then(logoutSuccessFn, logoutErrorFn);

      function logoutSuccessFn(data, status, headers, config) {
        Auth.unAuthenticate();
        window.location = '/';
      }

      function logoutErrorFn(data, status, headers, config) {
        console.error('Epic failure!');
      }
    }

    function getAuthenticatedUser() {
      if (!$cookies.authenticatedUser) {
        return;
      }
      return JSON.parse($cookies.authenticatedUser);
    }

    function isAuthenticated() {
      return !!$cookies.authenticatedUser;
    }

    function setAuthenticatedUser(user) {
      $cookies.authenticatedUser = JSON.stringify(user);
    }

    function unAuthenticate() {
      delete $cookies.authenticatedUser;
    }

    function login(username, password, successCb, errorCb) {
      return $http.post('/api/auth/login/', {
        username: username,
        password: password
      }).then(successCb)
        .catch(errorCb);
    }

  }

})();
