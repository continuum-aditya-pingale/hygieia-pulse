// /**
//  * Controller for the dashboard route.
//  * Render proper template.

/* (function () {
    'use strict';

    angular 
        .module(HygieiaConfig.module)
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['dashboard', '$location', 'dashboardService', 'ScoreDisplayType'];
    function DashboardController(dashboard, $location, dashboardService, ScoreDisplayType) {
        dashboardTitle = dashboardService.getDashboardTitle(dashboard);
        console.log(dashboardTitle);
    }})(); */




/**
 * Controller for the dashboard route.
 * Render proper template.
 */
var dashboardTitle ;




(function () {
    'use strict';
    angular
        .module(HygieiaConfig.module)
        .controller('MsTemplateController',MsTemplateController);
        

        MsTemplateController.$inject = ['$scope', '$sce'];
        /*.controller('DashboardController', DashboardController);
        DashboardController.$inject = ['dashboard'];
        console.log(dashboard);*/
        // console.log(dashboard);
	function MsTemplateController($scope, $sce) {

        console.log($scope.dashboardTitle);

        var blackduck = "http://pulse.corp.continuum.net/blackduck/showdata?name="+$scope.dashboardTitle;
	var builds = "http://pulse.corp.continuum.net/dashboard/query?name="+$scope.dashboardTitle;
	$scope.url2 = $sce.trustAsResourceUrl(builds);
        //var name = "https://www.google.com";
        $scope.url1 = $sce.trustAsResourceUrl(blackduck);
        var ctrl = this;
        ctrl.tabs = [
            { name: "Widget"},
            { name: "Pipeline"},
            { name: "Cloud"}
        ];
   

        ctrl.minitabs = [
            { name: "Quality"}

        ];

        ctrl.miniFeaturetabs = [
            { name: "Feature"},
            { name: "Team"}

        ];
        
        ctrl.widgetView = ctrl.tabs[0].name;
        ctrl.toggleView = function (index) {
            ctrl.widgetView = typeof ctrl.tabs[index] === 'undefined' ? ctrl.tabs[0].name : ctrl.tabs[index].name;
        };

        ctrl.miniWidgetView = ctrl.minitabs[0].name;
        ctrl.miniToggleView = function (index) {
            ctrl.miniWidgetView = typeof ctrl.minitabs[index] === 'undefined' ? ctrl.minitabs[0].name : ctrl.minitabs[index].name;
        };

        ctrl.miniFeatureWidgetView = ctrl.miniFeaturetabs[0].name;
        ctrl.miniFeatureToggleView = function (index) {
            ctrl.miniFeatureWidgetView = typeof ctrl.miniFeaturetabs[index] === 'undefined' ? ctrl.miniFeaturetabs[0].name : ctrl.miniFeaturetabs[index].name;
        };
        
    }
})();
