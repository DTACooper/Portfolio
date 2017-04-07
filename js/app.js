var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'MainController',
      templateUrl: "views/main.html"
    })
    .when('/portfolio', {
      controller: 'MainController',
      templateUrl: 'views/portfolio.html'
    })
    .when('/experience', {
      controller: 'MainController',
      templateUrl: 'views/experience.html'
    })
    .when('/skills', {
      controller: 'MainController',
      templateUrl: 'views/skills.html'
    })
    .when('/education', {
      controller: 'MainController',
      templateUrl: 'views/education.html'
    })
    .when('/about', {
      controller: 'MainController',
      templateUrl: 'views/about.html'
    })
    .when('/contact', {
      controller: 'MainController',
      templateUrl: 'views/contact.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});
