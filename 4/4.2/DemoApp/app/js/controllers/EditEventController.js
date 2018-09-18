'use strict'

eventsApp.controller('EditEventController',
  function EditEventController($scope) {
    $scope.saveEvent = function(event, newEventForm) {
      console.log(newEventForm);
      console.log(event);
      if(newEventForm.$valid) {
        window.alert('event \'' + event.name + '\' saved!');
      };
    };

    $scope.cancelEdit = function() {
      window.location="/EventDetails.html";
    }
  }
);
