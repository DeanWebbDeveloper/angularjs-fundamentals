'use strict';

eventsApp.controller('EventController',
  function EventContoller($scope) {

    $scope.snippet = '<span style="color:red">Hello there</span>';
    $scope.boolValue = false;
    $scope.mystyle = {color:'red'};
    $scope.myclass = "blue";
    $scope.buttonDisabled = true;
    $scope.event = {
      name: 'Angular Boot Camp',
      date: '1/1/2019',
      time: '10.30 am',
      location: {
        address: 'Palace of Westminster',
        city: 'London',
        postcode: 'SW1A 0AA'
      },
      imageUrl: 'img/angularjs-logo.png',
      sessions: [
        {
          name: 'Directives Masterclass',
          creatorName: 'Bob Smith',
          duration: '1 hr',
          level: 'Advanced',
          abstract: 'In this session you will learn the ins and outs of directives!',
          upVoteCount: 0
        },
        {
          name: 'Scopes for fun and profit',
          creatorName: 'John Doe',
          duration: '30 mins',
          level: 'Introductory',
          abstract: 'This session will take a closer look at scopes. Learn what they do, how they do it, and how to get them to do it for you.',
          upVoteCount: 0
        },
        {
          name: 'Well Behaved Controllers',
          creatorName: 'Jane Doe',
          duration: '2 hours',
          level: 'Intermediate',
          abstract: 'Controllers are the beginning of everything Angular does. Learn how to craft controllers that will win the respect of your friends and neighbours.',
          upVoteCount: 0
        }
      ]
    }

    $scope.upVoteSession = function(session) {
      session.upVoteCount++;
    };

    $scope.downVoteSession = function(session) {
      session.upVoteCount--;
    }
  }
);
