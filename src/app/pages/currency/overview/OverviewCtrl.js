(function () {
    'use strict';

    angular.module('BlurAdmin.pages.currency.overview')
        .controller('OverviewCtrl', OverviewCtrl);

    /** @ngInject */
    function OverviewCtrl($scope,$location,$stateParams,cookieManagement,$window,environmentConfig,$http,errorHandler) {

        var vm = this;
        vm.token = cookieManagement.getCookie('TOKEN');
        $scope.currencyCode = $stateParams.currencyCode;
        vm.currenciesList = JSON.parse($window.sessionStorage.currenciesList || '[]');
        $scope.loadingCurrencies = true;
        vm.currenciesList.forEach(function (element) {
            if(element.code ==  $scope.currencyCode){
                $scope.currencyObj = element;
            }
        });

        vm.getCurrencyOverview = function () {
            if(vm.token) {
                $scope.loadingCurrencies = true;
                $http.get(environmentConfig.API + '/admin/currencies/' + $scope.currencyCode + '/overview/', {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': vm.token
                    }
                }).then(function (res) {
                    if (res.status === 200) {
                        $scope.currencyOverviewData = res.data.data;
                        $scope.loadingCurrencies = false;
                    }
                }).catch(function (error) {
                    $scope.loadingCurrencies = false;
                    errorHandler.evaluateErrors(error.data);
                    errorHandler.handleErrors(error);
                });
            }
        };
        vm.getCurrencyOverview();

        vm.getCurrencyOverviewUsersData = function () {
            if(vm.token) {
                $scope.loadingUsers = true;
                $http.get(environmentConfig.API + '/admin/users/overview/', {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': vm.token
                    }
                }).then(function (res) {
                    if (res.status === 200) {
                        $scope.currencyOverviewUsersData = res.data.data;
                    }
                }).catch(function (error) {
                    $scope.loadingUsers = false;
                    errorHandler.evaluateErrors(error.data);
                    errorHandler.handleErrors(error);
                });
            }
        };
        vm.getCurrencyOverviewUsersData();

        $scope.goToPath = function (path) {
          $location.path(path);
        };


    }
})();