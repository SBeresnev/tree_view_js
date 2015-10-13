'use strict';

/**
 * @ngdoc function
 * @name treeViewApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the treeViewApp

 */
  angular.module("treeViewApp").controller("MainController", function($scope, $http, $location, httpServices, DOMAIN){

    $scope.var = {
      url:'',
      loading: false,
      treeData: new kendo.data.HierarchicalDataSource($scope.treeData),
      newData : new kendo.data.HierarchicalDataSource($scope.newData)

    };

    $http.get('dao/ate.json').then(function(res){ $scope.var.treeData = res.data; $scope.var.newData = res.data; });

    $scope.click = function(dataItem) {

        if (dataItem.hasChildren) return;

        $scope.var.url = DOMAIN + "/nka_net3/address/getate?parent_id="+dataItem.ate_id.toString();

        $http.get($scope.var.url).then(function (res) {

        $scope.var.newData = res.data;

        //$scope.var.treeData = $scope.var.newData;

         for (var i = 0; i <  $scope.var.newData.length; i++) {

            $scope.addBelow($scope.var.newData[i]);

          }

      });

    };

    $scope.init = function () {

       //httpServices.getAte('',$scope);

        $scope.var.url = DOMAIN + "/nka_net3/address/getate?parent_id=";

        $http.get($scope.var.url).then(function (res) { $scope.var.treeData = res.data;

        $scope.var.newData = res.data;

        });

    }

    $scope.addAfter = function(item) {

      var array = item.parent();

      var index = array.indexOf(item);

      var newItem = makeItem();

      array.splice(index + 1, 0, newItem);

    };

    $scope.addBelow = function(item) {

        var itm = {ate_id: item.ate_id , ate_name: kendo.toString(item.ate_name)}

        $scope.tree.append(itm, $scope.tree.select());

    };

    $scope.remove = function(item) {

      var array = item.parent();

      var index = array.indexOf(item);

      array.splice(index, 1);

    };


  })
