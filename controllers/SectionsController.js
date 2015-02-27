newspaperMaintainer.controller("SectionsCtrl",
  function SectionsCtrl($scope, SectionsFactory) {
    $scope.sections = SectionsFactory.sections;
    $scope.SectionsFactory = SectionsFactory;
  });
