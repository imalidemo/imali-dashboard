(function () {
    'use strict';

    angular.module('BlurAdmin.pages.services.notificationService.notificationServiceLogs')
        .controller('NotificationServiceLogsResendModalCtrl', NotificationServiceLogsResendModalCtrl);

    /** @ngInject */
    function NotificationServiceLogsResendModalCtrl($scope,log,$http,$uibModalInstance,cookieManagement,errorHandler,toastr) {

        var vm = this;
        vm.token = cookieManagement.getCookie('TOKEN');
        vm.baseUrl = cookieManagement.getCookie('SERVICEURL');
        $scope.log = log;
        $scope.recipient = {};
        $scope.recipient.email = log.recipient

        $scope.resendNotification = function () {
            $scope.loadingLogs =  true;
            if(vm.token) {
                $http.post(vm.baseUrl + 'admin/logs/' + log.id + /send/,{recipient: $scope.recipient.email}, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': vm.token
                    }
                }).then(function (res) {
                    $scope.loadingLogs =  false;
                    if (res.status === 200) {
                        toastr.success('Notification successfully resent');
                        $uibModalInstance.close($scope.log);
                    }
                }).catch(function (error) {
                    $scope.loadingLogs =  false;
                    errorHandler.evaluateErrors(error.data);
                    errorHandler.handleErrors(error);
                });
            }
        };

    }
})();
