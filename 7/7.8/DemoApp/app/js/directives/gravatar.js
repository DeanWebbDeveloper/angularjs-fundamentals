'use strict';

eventsApp.directive('gravatar', function(gravatarUrlBuilder) {
  return {
    restrict: 'E',
    template: '<img class="img-fluid"/>',
    replace:  true,
    link:     function(scope, element, attrs, controller) {
                attrs.$observe('email', function(newValue, oldValue) {
                  if (newValue !== oldValue) {
                    attrs.$set('src', gravatarUrlBuilder.buildGravatarUrl(newValue));
                  }
                });
              }
  }
});
