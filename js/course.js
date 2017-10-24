app.controller('courseController',['$scope','$http','$timeout',function($scope,$http,$timeout){
    var hash = window.location.hash;
     var path = new RegExp("#/course")
     if(path.test(hash)){
       $("#mainNav").addClass("couTop");
     }else{
       $("#mainNav").removeClass("couTop");
     }   
}]);

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4();
}
