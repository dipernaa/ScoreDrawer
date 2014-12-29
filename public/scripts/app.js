var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: '../views/home.html',
            controller: 'MainCtrl'
        }).
        when('/golf', {
            templateUrl: '../views/golf.html',
            controller: 'GolfCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
})