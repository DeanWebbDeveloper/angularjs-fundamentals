'use strict';

eventsApp.controller('EventController',
  function EventContoller($scope, eventData) {

    $scope.sortorder = 'name';
    
    eventData.getEvent(function() {
      $scope.event = event;
    });

    $scope.upVoteSession = function(session) {
      session.upVoteCount++;
    };

    $scope.downVoteSession = function(session) {
      session.upVoteCount--;
    }
  }
);
