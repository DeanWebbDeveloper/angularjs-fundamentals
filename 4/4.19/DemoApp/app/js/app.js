'use strict';
//For this module, need to add in dependency 'ngCookies'.
//Removed here to prevent future issues with other modules
var eventsApp = angular.module('eventsApp', ['ngSanitize', 'ngResource'])
  .factory('myCache', function($cacheFactory){
    return $cacheFactory('myCache', {capacity:3})
  });
