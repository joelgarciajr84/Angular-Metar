angular.module('metarapp').controller('checkmetarctrl', function($scope, $http, $rootScope){
    $rootScope.$on('metarinfo', function(event, data) {
      $scope.allmetarinfo = data;
    });
});  