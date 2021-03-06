(function () {
    'use strict';

    angular.module('BlurAdmin.pages.userDetails')
        .directive('addUserAddressView', addUserAddressView);

    /** @ngInject */
    function addUserAddressView() {
        return {
            restrict: 'E',
            require: '^parent',
            templateUrl: 'app/pages/users/userDetails/userAddress/addUserAddress/addUserAddress.html'
        };
    }
})();
