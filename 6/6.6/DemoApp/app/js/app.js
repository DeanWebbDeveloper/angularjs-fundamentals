'use strict';
var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute'])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/newEvent',
      {
        templateUrl:  'templates/NewEvent.html',
        controller:   'EditEventController'
      });
    $routeProvider.when('/events',
      {
        templateUrl:  'templates/EventList.html',
        controller:   'EventListController',
        resolve:      {
                        function($route, eventData) {
                          return eventData.getAllEvents().$promise;
                        }
                      }
      });
    $routeProvider.when('/',
      {
        templateUrl:  'templates/EventList.html',
        controller:   'EventListController',
        resolve:      {
                        function($route, eventData) {
                          return eventData.getAllEvents().$promise;
                        }
                      }
      });
    $routeProvider.when('/event/:eventId',
      {
        templateUrl:  'templates/EventDetails.html',
        controller:   'EventController',
        resolve:      {
                        event: function($route, eventData) {
                          return eventData.getEvent($route.current.pathParams.eventId).$promise;
                        }
                      }
      });
    $routeProvider.when('/editProfile',
      {
        templateUrl:  'templates/EditProfile.html',
        controller:   'EditProfileController'
      });
    $routeProvider.when('/sampleDirective',
      {
        templateUrl:  'templates/sampleDirective.html',
        controller:   'SampleDirectiveController'
      });
    $routeProvider.when('/404',
      {
        template: '<div class="row"><h2 class="p-3">404</h2></div><div class="row"><div class="col-12"><p>The page you have visited does not exist. <a href="events">Click here to go back to events</a></p></div></div>'
      });
    $routeProvider.otherwise({redirectTo: '/404'});
    $locationProvider.html5Mode(true);
  });
