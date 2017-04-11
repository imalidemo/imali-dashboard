(function () {
    'use strict';

    angular.module('BlurAdmin.pages.transactions.settings')
        .controller('TierRequirementsCtrl', TierRequirementsCtrl);

    /** @ngInject */
    function TierRequirementsCtrl($rootScope,$scope,IMAGEURL) {

        $scope.selectedTier = 'Tier 1';

        $scope.selectTier= function(tier){
            $scope.selectedTier = tier;
        };

        $scope.saveTierRequirements = function(){
            alert($scope.selectedTier);
        };
    }
})();