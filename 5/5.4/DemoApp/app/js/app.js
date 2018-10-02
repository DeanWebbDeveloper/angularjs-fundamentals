'use strict';
//For this module, need to add in dependency 'ngCookies'.
//Removed here to prevent future issues with other modules
var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute'])
  .config(function($routeProvider) {
    $routeProvider.when('/newEvent',
      {
        templateUrl:  'templates/NewEvent.html',
        controller:   'EditEventController'
      })
  });
