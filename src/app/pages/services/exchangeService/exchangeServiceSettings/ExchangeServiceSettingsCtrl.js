(function () {
    'use strict';

    angular.module('BlurAdmin.pages.services.exchangeService.exchangeServiceSettings')
        .controller('ExchangeServiceSettingsCtrl', ExchangeServiceSettingsCtrl);

    /** @ngInject */
    function ExchangeServiceSettingsCtrl($scope,$http,cookieManagement,toastr,errorHandler,$state) {

        var vm = this;
        vm.token = cookieManagement.getCookie('TOKEN');
        vm.baseUrl = cookieManagement.getCookie('SERVICEURL');
        $scope.exchangeSettingView = '';
        $scope.updatingCompanyDetails =  false;
        vm.updatedCompany = {};
        $scope.company = {};

        $scope.goToExchangeSetting = function (setting) {
            $scope.exchangeSettingView = setting;
        };

        vm.getCompanyDetails = function () {
          $scope.updatingCompanyDetails =  true;
            if(vm.token) {
                $http.get(vm.baseUrl + 'admin/company/', {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': vm.token
                    }
                }).then(function (res) {
                    $scope.updatingCompanyDetails =  false;
                    if (res.status === 200) {
                      $scope.company = res.data.data;
                    }
                }).catch(function (error) {
                    $scope.updatingCompanyDetails =  false;
                    errorHandler.evaluateErrors(error.data);
                    errorHandler.handleErrors(error);
                });
            }
        };
        vm.getCompanyDetails();

        $scope.companyDetailsChanged = function (field) {
            vm.updatedCompany[field] = $scope.company[field];
        };

        $scope.updateCompanyDetails = function () {
          $scope.updatingCompanyDetails =  true;
            $scope.company = {};
            if(vm.token) {
                $http.patch(vm.baseUrl + 'admin/company/', vm.updatedCompany, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': vm.token
                    }
                }).then(function (res) {
                    $scope.updatingCompanyDetails =  false;
                    if (res.status === 200) {
                      toastr.success('Company details have been successfully updated');
                      $scope.company = res.data.data;
                    }
                }).catch(function (error) {
                    $scope.updatingCompanyDetails =  false;
                    errorHandler.evaluateErrors(error.data);
                    errorHandler.handleErrors(error);
                });
            }
        };

        $scope.goToTransactionsWebhooks = function(secret){
            $state.go('webhooks.list',{"secret": secret});
        };

        $scope.goToGeneralWebhooks = function(secret){
            $state.go('webhooks.list',{"secret": secret});
        };



    }

})();
