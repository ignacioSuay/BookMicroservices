(function () {
    'use strict';

    angular
        .module('bookMicroservicesApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
