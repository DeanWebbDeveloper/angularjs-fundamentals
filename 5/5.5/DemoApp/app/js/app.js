'use strict';
//For this module, need to add in dependency 'ngCookies'.
//Removed here to prevent future issues with other modules
var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute'])
  .config(function($routeProvider) {
    $routeProvider.when('/newEvent',
      {
        templateUrl:  'templates/NewEvent.html',
        controller:   'EditEventController'
      });
    $routeProvider.when('/events',
      {
        templateUrl:  'templates/EventList.html',
        controller:   'EventListController'
      });
    $routeProvider.when('/event/:eventId',
      {
        templateUrl:  'templates/EventDetails.html',
        controller:   'EventController'
      })
  });
