'use strict';

eventsApp.controller('EventController',
  function EventContoller($scope, eventData, $log) {

    $scope.sortorder = 'name';

    eventData.getEvent()
      .then(function(event) { $scope.event = event.data; })
      .catch(function(data, status, headers, config) {
        $log.warn(data, status, headers, config);
      });

    $scope.upVoteSession = function(session) {
      session.upVoteCount++;
    };

    $scope.downVoteSession = function(session) {
      session.upVoteCount--;
    }
  }
);
