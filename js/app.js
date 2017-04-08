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


/*
* Function to animate leaving a page
*/
$.fn.leavePage = function() {

  this.click(function(event){

    // Don't go to the next page yet.
    event.preventDefault();
    linkLocation = this.href;

    // Fade out this page first.
    $('body').fadeOut(500, function(){

      // Then go to the next page.
      window.location = linkLocation;
    });
  });
};


/*
* Call the leavePage function upon link clicks with the "transition" class
*/
$('.transition').leavePage();
