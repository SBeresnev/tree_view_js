'use strict';

angular.module("treeViewApp").controller("TreeController",  function($scope, $http, DOMAIN_)
{

  $scope.mywindow = [];

  $scope.adrData = [];

  $scope.url_ = DOMAIN_ + '//#/main';

  $scope.toSend = {address_id:'', adr_num: '', soato:'', adr :'' };

  $scope.toSend_old = {address_id:'', adr_num: '', soato:'', adr :'' };

  $scope.form = {};
  $scope.form.serviceLevelName = 'Normal';

  $scope.servicesData = [
      "Low",
      "Normal",
      "Medium",
      "High",
      "Immediate"
    ];


  $scope.init = function() {

  }


  $scope.ddSelectOptions = [
    {
      text: 'Label',
      divider: true
    }, {
      text: 'Option1',
      value: 'one',
      iconCls: 'someicon'
    }, {
      text: 'Option2',
      someprop: 'somevalue'
    }, {
      divider: true
    }, {
      text: 'Option4',
      href: 'http://www.google.com'
    }
  ];

  $scope.ddSelectSelected = {
    text: "Select an Option"
  };


  var apple_selected, tree, treedata_avm, treedata_geography;

  $scope.my_tree_handler = function(branch) {
    var _ref;
    $scope.output = "You selected: " + branch.label;
    if ((_ref = branch.data) != null ? _ref.description : void 0) {
      return $scope.output += '(' + branch.data.description + ')';
    }
  };

  apple_selected = function(branch) {
    return $scope.output = "APPLE! : " + branch.label;
  };

  treedata_avm = [
    {
      label: 'Animal',
      children: [
        {
          label: 'Dog',
          data: {
            description: "man's best friend"
          }
        }, {
          label: 'Cat',
          data: {
            description: "Felis catus"
          }
        }, {
          label: 'Hippopotamus',
          data: {
            description: "hungry, hungry"
          }
        }, {
          label: 'Chicken',
          children: ['White Leghorn', 'Rhode Island Red', 'Jersey Giant']
        }
      ]
    }, {
      label: 'Vegetable',
      data: {
        definition: "A plant or part of a plant used as food, typically as accompaniment to meat or fish, such as a cabbage, potato, carrot, or bean.",
        data_can_contain_anything: true
      },
      onSelect: function(branch) {
        return $scope.output = "Vegetable: " + branch.data.definition;
      },
      children: [
        {
          label: 'Oranges'
        }, {
          label: 'Apples',
          children: [
            {
              label: 'Granny Smith',
              onSelect: apple_selected
            }, {
              label: 'Red Delicous',
              onSelect: apple_selected
            }, {
              label: 'Fuji',
              onSelect: apple_selected
            }
          ]
        }
      ]
    }, {
      label: 'Mineral',
      children: [
        {
          label: 'Rock',
          children: ['Igneous', 'Sedimentary', 'Metamorphic']
        }, {
          label: 'Metal',
          children: ['Aluminum', 'Steel', 'Copper']
        }, {
          label: 'Plastic',
          children: [
            {
              label: 'Thermoplastic',
              children: ['polyethylene', 'polypropylene', 'polystyrene', ' polyvinyl chloride']
            }, {
              label: 'Thermosetting Polymer',
              children: ['polyester', 'polyurethane', 'vulcanized rubber', 'bakelite', 'urea-formaldehyde']
            }
          ]
        }
      ]
    }
  ];

  treedata_geography = [
    {
      label: 'North America',
      children: [
        {
          label: 'Canada',
          children: ['Toronto', 'Vancouver']
        }, {
          label: 'USA',
          children: ['New York', 'Los Angeles']
        }, {
          label: 'Mexico',
          children: ['Mexico City', 'Guadalajara']
        }
      ]
    }, {
      label: 'South America',
      children: [
        {
          label: 'Venezuela',
          children: ['Caracas', 'Maracaibo']
        }, {
          label: 'Brazil',
          children: ['Sao Paulo', 'Rio de Janeiro']
        }, {
          label: 'Argentina',
          children: ['Buenos Aires', 'Cordoba']
        }
      ]
    }
  ];

  $scope.my_data = treedata_avm;

  $scope.try_changing_the_tree_data = function() {
    if ($scope.my_data === treedata_avm) {
      return $scope.my_data = treedata_geography;
    } else {
      return $scope.my_data = treedata_avm;
    }
  };

  $scope.my_tree = tree = {};


  function modalWin() {
    if (window.showModalDialog) {
      window.showModalDialog("#/main","name", "dialogWidth:255px;dialogHeight:250px");
    } else {
      window.open('#/main','name','height=255,width=250,toolbar=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no ,modal=yes');
    }
  }

  $scope.OpenWindow= function() {

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

  $scope.onclick = function(){ }

  $scope.openRef = function() {

       $scope.toSend = JSON.parse(sessionStorage.getItem("addObj"));

     // $scope.toSend_old = JSON.parse(addressmsg.getfullAddressMsg());
     // $scope.toSend.adr = localStorage.getItem("adr");
     // $scope.toSend = $rootScope.toSend;
     // addressmsg.getfullAddressMsg();
     // var w = window.open(this.href, 'popupwindow', 'width=800,height=800');

      return false;

    }



});

