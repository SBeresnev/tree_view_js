'use strict';

/**
 * @ngdoc overview
 * @name treeViewApp
 * @description
 * # treeViewApp
 *
 * Main module of the application.
 */
var app = angular.module('treeViewApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
	  'kendo.directives'
    ])
	.constant('DOMAIN', "" + window.location.protocol + '//'+ window.location.hostname+":8080")
    .config(function ($routeProvider, $httpProvider) {
        $routeProvider
		.when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainController'
        })
		.when('/address', {
        templateUrl: 'views/address.html',
		controller: 'TreeController'
         })
      .otherwise({
        redirectTo: '/'
      });
 });
