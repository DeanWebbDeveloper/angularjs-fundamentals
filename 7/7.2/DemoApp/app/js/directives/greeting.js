'use strict'

eventsApp
  .directive('greeting', function() {
    return {
      restrict:   "E",
      replace:    true,
      transclude: true,
      template:   "<div><button class=\"btn\" data-ng-click=\"sayHello()\">Say Hello</button><div data-ng-transclude></div></div>",
      controller: function GreetingController($scope) {
                    var greetings = ['Hello'];
                    $scope.sayHello = function() {
                      alert(greetings.join());
                    }
                    this.addGreeting = function(greeting) {
                      greetings.push(greeting);
                    }
                  }
    }
  })
  .directive('finnish', function() {
    return {
      restrict: 'E',
      require:  '^greeting',
      link:     function(scope, element, attrs, controller) {
                  controller.addGreeting('hei');
                }
    }
  })
  .directive('hindi', function() {
    return {
      restrict: 'E',
      require:  '^greeting',
      link:     function(scope, element, attrs, controller) {
                  controller.addGreeting('namaste');
                }
    }
  });
