newspaperMaintainer.factory("SectionsFactory", function SectionsFactory() {
  var factory = {};
  factory.sections = [];

  factory.addSection = function() {
    factory.sections.push({
      name: factory.sectionName,
      id: factory.sections.length + 1,
      reporters: []
    });
    factory.sectionName = null;
  };

  factory.deleteSection = function(section) {
    var index = factory.sections.indexOf(section);
    factory.sections.splice(index, 1);
  };

  return factory;
});
