app.directive('appInfo', function() {
  return {
    restrict: 'E', //means new HTML element
    scope: { //pass attributes into this directive through an attribute named info
      info: '=' //look for element named info
    },
    templateUrl:
  'js/directives/appInfo.html'};
});
