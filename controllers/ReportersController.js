newspaperMaintainer.controller("ReportersCtrl",
  function ReportersCtrl($scope, $stateParams, SectionsFactory, UtilitiesFactory) {
    $scope.section = UtilitiesFactory.findByID(SectionsFactory.sections, $stateParams.sectionID)
    $scope.addReporter = function() {
      $scope.section.reporters.push({
        name: $scope.reporterName
      });
      $scope.reporterName = null;
    }
  });
