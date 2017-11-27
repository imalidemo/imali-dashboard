(function () {
    'use strict';

    angular.module('BlurAdmin.pages.webhooks', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider,$urlRouterProvider) {
        $stateProvider
            .state('webhooks', {
                url: '/webhooks/list',
                params: {
                    secret: null,
                    webhookUrl: null
                },
                templateUrl: 'app/pages/webhooks/webhooks.html',
                controller: "WebhooksCtrl",
                title: 'Webhooks',
                sidebarMeta: {
                    order: 400
                }
            });
    }

})();