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
    'angularBootstrapNavTree',
    'ngDropdowns',
	  'kendo.directives'
    ]).directive('bootstrapDropdown', function ($compile) {
  return {
    restrict: 'E',
    scope: {
      items: '=dropdownData',
      selectedItem: '=preselectedItem',
      ngModel: '=',
      placeholder: '@',
      fieldLabel: '@'
    },
    link: function (scope, element, attrs) {

      scope.selectVal = function (item) {
        scope.ngModel = item;
      };

      var html = '';
      html += '<div class="form-group">';
      html += '  <div class="input-group">';
      html += '    <div class="input-group-addon" style="min-width:100px" data-ng-model="fieldLabel">{{fieldLabel}}</div>';
      html += '    <input class="form-control" id="statusinput" type="text" data-ng-model ="ngModel" data-ng-attr-placeholder="{{placeholder}}" />';
      html += '    <div class="input-group-btn" data-ng-if="items.length">';
      html += '      <div class="btn-group ">';
      html += '        <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" >';
      html += '          <span class="caret"></span>';
      html += '        </button>';
      html += '        <ul class="dropdown-menu dropdown-menu-right dropdown-scroll" role="menu">';
      html += '          <li data-ng-repeat="item in items"><a data-ng-href="" role="menuitem" tabindex="-1" data-ng-click="selectVal(item)">{{item}}</a></li>';
      html += '        </ul>';
      html += '      </div>';
      html += '    </div>';
      html += '  </div>';
      html += '</div>';

      element.append($compile(html)(scope));
    }
  };
}).constant('DOMAIN', "" + window.location.protocol + '//'+ window.location.hostname+":8080")
  .constant('DOMAIN_', "" + window.location.protocol + '//'+ window.location.hostname+":9000")
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
