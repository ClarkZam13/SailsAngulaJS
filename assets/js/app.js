angular.module("app", ["ngRoute", "app.controllers"])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'AutoCRUDCtrl'});
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
