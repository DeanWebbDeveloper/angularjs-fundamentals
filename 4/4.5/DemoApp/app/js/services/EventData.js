eventsApp.factory('eventData', function ($http, $log) {
  return {
    getEvent: function(successcb) {
      $http({method: 'GET', url: '/data/event/1'})
        .then(function(data, status, headers, config) {
          successcb(data);
        }, function(data, status, headers, config) {
          $log.warn(data, status, headers(), config);
        });
    }
  };
});
