'use strict';

eventsApp.controller('EventController',
  function EventContoller($scope, eventData, $routeParams, $route) {
    $scope.sortorder        = 'name';
    $scope.event            = eventData.getEvent($routeParams.eventId);
    $scope.upVoteSession    = function(session) {
                                session.upVoteCount++;
                              };
    $scope.downVoteSession  = function(session) {
                                session.upVoteCount--;
                              };
  }
);
