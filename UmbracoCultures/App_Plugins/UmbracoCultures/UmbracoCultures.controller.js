angular.module('umbraco').controller('UmbracoCulturesController', function ($route, $scope, $routeParams, $http, notificationsService, navigationService) {
	$scope.cultures = "";
	$http.get('/umbraco/backoffice/UmbracoCultures/UmbracoCultures/getCultures').then(function (response) {
		console.log(response);
		$scope.cultures = response.data;
	}, function (error) { });
	angular.element('input[name="UmbracoCultures"]').closest(".umb-property.ng-scope").hide();
});