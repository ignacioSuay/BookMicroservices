(function() {
    'use strict';

    angular
        .module('bookMicroservicesApp')
        .config(localStorageConfig);

    localStorageConfig.$inject = ['$localStorageProvider', '$sessionStorageProvider'];

    function localStorageConfig($localStorageProvider, $sessionStorageProvider) {
        $localStorageProvider.setKeyPrefix('jhi-');
        $sessionStorageProvider.setKeyPrefix('jhi-');
    }
})();
