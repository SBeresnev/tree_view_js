'use strict';

angular.module("treeViewApp").controller("TreeController",  function($scope) {

	  this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

	  $scope.tool = "{ 'name': 'Pen'  'icon': 'icons/pen.png' }";

    $scope.tree = [{name: "Node", nodes: [{name: "Node1", nodes: []}]}];

    $scope.hasClass = function (elem, className) { return new RegExp("(^|\\s)"+className+"(\\s|$)").test(elem.className) }

    $scope.delete = function(data) {
        data.nodes = [];
    };

    $scope.add = function(data) {
        var post = data.nodes.length + 1;
        var newName = data.name + '-' + post;
        data.nodes.push({name: newName,nodes: []});
    };

	  $scope.tree_toggle = function () {

        var clickedElem = event.target || event.srcElement

        if (clickedElem.className.search('Expand')== -1) {
                return // клик не там
        }

        // Node, на который кликнули
        var node = clickedElem.parentNode
        /*
        if (node.className.search('ExpandLeaf') == -1) {
                return // клик на листе
        }*/

        // определить новый класс для узла
        var newClass = node.className.search('ExpandOpen') >=0 ? 'ExpandClosed' : 'ExpandOpen'
        // заменить текущий класс на newClass
        // регексп находит отдельно стоящий open|close и меняет на newClass
        var re =  /(^|\s)(ExpandOpen|ExpandClosed)(\s|$)/
        node.className = node.className.replace(re, '$1'+newClass+'$3')
  }

});

