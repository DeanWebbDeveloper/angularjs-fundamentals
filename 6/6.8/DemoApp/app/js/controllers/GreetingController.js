eventsApp.controller('GreetingController',
  function GreetingController($scope) {
    $scope.sayHello = function() {
      alert('Hello');
    };
  }
);
