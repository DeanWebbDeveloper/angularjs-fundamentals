'use strict';

eventsApp.filter('durations', function() {
  return function(duration) {
    switch(duration) {
      case 1:
        return "Half Hour";
      case 2:
        return "1 Hour";
      case 3:
        return "Half Day";
      case 4:
        return "Full Day";
    }
  }
})

eventsApp.filter('levelSymbols', function() {
  return function(level) {
    switch(level) {
      case "Introductory":
        return "&#9733;&#9734;&#9734;";
      case "Intermediate":
        return "&#9733;&#9733;&#9734;";
      case "Advanced":
        return "&#9733;&#9733;&#9733;";
    }
  }
})
