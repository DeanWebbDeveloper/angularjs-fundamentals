'use strict';

describe('eventThumbnail', function() {
  beforeEach(module('eventsApp'));
  beforeEach(module('/templates/directives/eventThumbnail.html'));

  beforeEach(inject(function($compile, $rootScope) {
    var scope = $rootScope.$new();
    scope.event = { name:       'Angular Expo',
                    date:       '1/1/2050',
                    time:       '10:30',
                    location: { address:  '12 Fake Road',
                                city:     'London',
                                postcode: 'N1 1AA'
                              },
                    id:         1
                  }

    el = angular.element('<event-thumbnail event="event" />');
    $compile(el)(scope);
    scope.$digest();
    console.log(el[0].outerHTMl);

  }))

  it('should bind the data', function() {
    expect(el.text()).toContain('Angular Expo');
  })
});
