'use strict';

eventsApp.controller('EventController',
  function EventContoller($scope, eventData, $log) {
    $scope.sortorder = 'name';
    eventData.getEvent()
      .$promise
      .then(function(event) { $scope.event = event; })
      .catch(function(response) { console.log(response); });

    $scope.upVoteSession = function(session) {
      session.upVoteCount++;
    };

    $scope.downVoteSession = function(session) {
      session.upVoteCount--;
    };
  }
);
