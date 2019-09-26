(function(angular) {
    'use strict';
    function UpdatedTestListController($uibModal) {
        var ctrl = this;

        ctrl.details = function(test) {
            $uibModal.open({
                controller: 'UpdatedTestDetailsController',
                controllerAs: 'testDetails',
                templateUrl: 'components/widgets/updatedcodeanalysis/testdetails.html',
                size: 'lg',
                resolve: {
                    testResult: function () {
                        return test;
                    }
                }
            });
        };

    }

    angular.module(HygieiaConfig.module).component('testList', {
        templateUrl: 'components/widgets/updatedcodeanalysis/testList.html',
        controller: UpdatedTestListController,
        bindings: {
            testTitle: '@',
            testData: '<'
        }
    });
})(window.angular);
