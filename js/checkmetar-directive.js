angular.module('metarapp').directive('checkmetar', function($http, $rootScope) {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function($scope, $element, $attrs, ngModel) {
            $scope.$watch($attrs.ngModel, function(value) {
            if (value) {

                $http.get('http://avwx.rest/api/metar.php?station='+ value +'&format=JSON').then(function(response){
                $rootScope.$broadcast('metarinfo', response.data);

                });
            }

            });
        }
    }
});