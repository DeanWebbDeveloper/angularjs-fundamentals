eventsApp.directive("focusDirective", function($timeout) {
  return {
    restrict: "A",
    link: function ( scope, element, attributes, controller ) {
            scope.$watch( attributes.focusDirective, function ( val ) {
                $timeout( function () { element[0].focus(); } );
            }, true);
          }
  };
});
