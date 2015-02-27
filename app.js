var newspaperMaintainer = angular.module('newspaperMaintainer', [ui.router]);

newspaperMaintainer.config(function($stateProvider) {

  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

});
