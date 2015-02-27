newspaperMaintainer.factory("UtilitiesFactory", function() {
  return {
    findByID: function(set, id) {
      for (var i = 0; i < set.length; i++) {
        if (set[i].id == id)
          return set[i];
      }
      return null;
    }
  };
});
