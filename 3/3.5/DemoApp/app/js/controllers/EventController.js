'use strict';

eventsApp.controller('EventController',
  function EventContoller($scope) {

    $scope.event = {
      name: 'Angular Boot Camp',
      date: '1/1/2019',
      time: '10.30 am',
      location: {
        address: 'Palace of Westminster',
        city: 'London',
        postcode: 'SW1A 0AA'
      },
      imageUrl: 'img/angularjs-logo.png'
    }
  }
);
