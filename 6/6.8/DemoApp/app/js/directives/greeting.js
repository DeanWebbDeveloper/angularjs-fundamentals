'use strict'

eventsApp.directive('greeting', function() {
  return {
    restrict: "E",
    replace:  true,
    template: "<button class=\"btn\" data-ng-click=\"sayHello()\">Say Hello</button>",
    controller: '@',
    name: 'ctrl'
  };
});
