'use strict';

eventsApp.controller('EventController',
  function EventContoller($scope, eventData) {

    $scope.sortorder = 'name';

    eventData.getEvent(function(event) {
      $scope.event = event.data;
    });

    $scope.upVoteSession = function(session) {
      session.upVoteCount++;
    };

    $scope.downVoteSession = function(session) {
      session.upVoteCount--;
    }
  }
);
