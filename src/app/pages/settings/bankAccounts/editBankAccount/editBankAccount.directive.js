(function () {
    'use strict';

    angular.module('BlurAdmin.pages.settings.bankAccounts')
        .directive('editBankAccount', editBankAccount);

    /** @ngInject */
    function editBankAccount() {
        return {
            restrict: 'E',
            templateUrl: 'app/pages/settings/bankAccounts/editBankAccount/editBankAccount.html'
        };
    }
})();
