/*
  Cheat code for http://particle-clicker.web.cern.ch/particle-clicker/
 */

(function(angular) {
  var e = angular.element;

  function c() {
    e('#detector').scope().dc.click();
  }

  setInterval(c, 100);

})(angular);