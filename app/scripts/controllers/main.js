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

    url      : '',
    parentAte: '',
    nameAte  : '',

    curAte : {ate_id:'', ate_name:'', soato:'' },

    curStreet : '',

    loading  : false,
    treeData : new kendo.data.HierarchicalDataSource($scope.treeData),
    ateDataSearch : new kendo.data.HierarchicalDataSource($scope.ateDataSearch),
    ateData  : new kendo.data.HierarchicalDataSource($scope.ateData)

  };

  // $http.get('dao/ate.json').then(function(res){ $scope.var.treeData = res.data; $scope.var.ateDataSearch = res.data; $scope.var.ateData = res.data;});

  $scope.cleanAte = function(){

    $scope.var.curAte.ate_id = '';

    $scope.var.curAte.ate_name = '';

    $scope.var.curAte.soato = '';

  }

  $scope.searchAte = function(){

    $scope.var.ateDataSearch = [];

    $scope.var.url = DOMAIN + "/nka_net3/address/getAtebyName_apr?parent_id="+ $scope.var.curAte.ate_id + "&ate_name=" +  $scope.var.nameAte.toString();

    $http.get($scope.var.url).then(function (res) {

      $scope.var.ateDataSearch = res.data;

      $scope.TabShow=true;

    });

  }

  $scope.getAte = function(dataItem) {

    $scope.var.curAte = getCurate(dataItem);

    if (dataItem.hasChildren) return;

    $scope.var.ateData = [];

    $scope.var.url = DOMAIN + "/nka_net3/address/getate?parent_id="+dataItem.ate_id.toString();

    $http.get($scope.var.url).then(function (res) {

      $scope.var.ateData = res.data;

      for (var i = 0; i <  $scope.var.ateData.length; i++) {

        $scope.addBelow($scope.var.ateData[i]);

      }

    });

  };

  $scope.init = function () {

    $scope.var.ateDataSearch = [];

    $scope.var.url = DOMAIN + "/nka_net3/address/getate?parent_id=";

    $http.get($scope.var.url).then(function (res) {

      $scope.var.treeData = res.data;


    });

  }

  $scope.addAfter = function(item) {

    var array = item.parent();

    var index = array.indexOf(item);

    var newItem = makeItem();

    array.splice(index + 1, 0, newItem);

  };

  $scope.addBelow = function(item) {

    var itm = {ate_id: item.ate_id, parentate_id:item.parentate_id, ate_name:kendo.toString(item.ate_name), soato: kendo.toString(item.soato)}

    $scope.tree.append(itm, $scope.tree.select());

  };

  $scope.remove = function(item) {

    var array = item.parent();

    var index = array.indexOf(item);

    array.splice(index, 1);

  };

  $scope.bindAte = function(item) {

    $scope.var.curAte.ate_id = item.ate_id;

    $scope.var.curAte.ate_name = item.parent_ate;

    $scope.var.curAte.soato = item.soato;

  };

  function getCurate(item){

    var cur_item = item;

    var ret_str = "";

    while (typeof cur_item != 'undefined')
    {
      ret_str = cur_item.ate_name+ "; " + ret_str;

      cur_item = cur_item.parentNode();
    }

    return {ate_id: item.ate_id, ate_name: ret_str , soato: item.soato } ;

  };

  /*
   function getCurate_(item, fate){

   if (typeof item.parentNode() != 'undefined')
   {
   fate =  getCurate(item.parentNode(), item.ate_name) + '; ' + fate;

   return fate;

   }else {

   return item.ate_name + '; ' + fate;
   }

   } */


})
