var newspaperMaintainer = angular.module("newspaperMaintainer", ["ui.router"]);

newspaperMaintainer.config(function($stateProvider) {

  $stateProvider.state("home", {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state("sections", {
    url: "/sections",
    templateUrl: "partials/sections.html",
    controller: "SectionsCtrl"
  });

  $stateProvider.state("sections.reporters", {
    url: "/:sectionID",
    templateUrl: "partials/sections.reporters.html",
    controller: "ReportersCtrl"
  });

});
