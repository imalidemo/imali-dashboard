
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.transactions.deposits')
        .directive('completeDeposit', completeDeposit);

    /** @ngInject */
    function completeDeposit() {
        return {
            restrict: 'E',
            templateUrl: 'app/pages/transactions/deposits/completeDeposit/completeDeposit.html'
        };
    }
})();
