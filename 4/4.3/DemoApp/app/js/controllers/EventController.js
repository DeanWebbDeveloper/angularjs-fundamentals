'use strict';

eventsApp.controller('EventController',
  function EventContoller($scope, eventData) {

    $scope.sortorder = 'name';
    $scope.snippet = '<span style="color:red">Hello there</span>';
    $scope.boolValue = false;
    $scope.mystyle = {color:'red'};
    $scope.myclass = "blue";
    $scope.buttonDisabled = true;
    $scope.event = eventData.event;

    $scope.upVoteSession = function(session) {
      session.upVoteCount++;
    };

    $scope.downVoteSession = function(session) {
      session.upVoteCount--;
    }
  }
);
