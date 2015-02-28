newspaperMaintainer.controller("ReportersCtrl",
  function ReportersCtrl($scope, $stateParams, SectionsFactory, UtilitiesFactory) {
  $scope.section = UtilitiesFactory.findByID(SectionsFactory.sections, $stateParams.sectionID)
  $scope.addReporter = function() {
    $scope.section.reporters.push({
      name: $scope.reporterName,
      employment: $scope.reporterEmployment,
      birthday: $scope.reporterBirthday
    });
    $scope.reporterName = null;
    $scope.reporterEmployment = null;
    $scope.reporterBirthday = null;
  }
});
