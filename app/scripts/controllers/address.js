'use strict';

angular.module("treeViewApp").controller("TreeController",  function($scope, $http, DOMAIN_) {

  $scope.mywindow = [];

  $scope.adrData = [];

  $scope.url_ = DOMAIN_ + '//#/main';

  $scope.toSend = {address_id:'', adr_num: '', soato:'', adr :'' };

  $scope.toSend_old = {address_id:'', adr_num: '', soato:'', adr :'' };

  $scope.init = function() {


  }

  function modalWin() {
    if (window.showModalDialog) {
      window.showModalDialog("#/main","name", "dialogWidth:255px;dialogHeight:250px");
    } else {
      window.open('#/main','name','height=255,width=250,toolbar=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no ,modal=yes');
    }
  }

  $scope.OpenWindow= function()  // custom function on click
  {

    sessionStorage.setItem("addObj",JSON.stringify([]));

    $scope.DlgOptions = {
      width: "1300px", height: "500px", modal: true,
      actions: ["Custom", "Minimize", "Maximize", "Close"],
      title: "Addresses"
    };

    $scope.window_.setOptions($scope.DlgOptions);

    $scope.window_.center();  // open dailog in center of screen

    $scope.window_.open();

  };

  $scope.onclick = function(){

  }


  $scope.openRef = function()
    {

       $scope.toSend = JSON.parse(sessionStorage.getItem("addObj"));

     // $scope.toSend_old = JSON.parse(addressmsg.getfullAddressMsg());
     // $scope.toSend.adr = localStorage.getItem("adr");
     // $scope.toSend = $rootScope.toSend;
     // addressmsg.getfullAddressMsg();
     // var w = window.open(this.href, 'popupwindow', 'width=800,height=800');

      return false;

    }



});

