// CONTROLLERS
weatherApp.controller('homeController', ['$scope', '$location', 'cityService', '$cookies', function($scope, $location, cityService, $cookies) {
   
    $scope.city = cityService.city;
    
    
    $scope.$watch('city', function() {
       cityService.city = $scope.city; 
        $cookies.put('ci', cityService.city);
    });
    
    $scope.submit = function() {
        $location.path("/forecast");
    };
    
}]);

weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', 'weatherService', '$cookies',  function($scope, $resource, $routeParams, cityService, weatherService, $cookies) {
    
    
    
    $scope.city = $cookies.get('ci');
    
    
    
    $scope.days = $routeParams.days || '2';
    
    $scope.weatherResult = weatherService.GetWeather($scope.city, $scope.days);
    
    $scope.convertToFahrenheit = function(degK) {
        
        return Math.round((1.8 * (degK - 273)) + 32);
        
        
    }
    
    $scope.convertToDate = function(dt) { 
      
        return new Date(dt * 1000);
        
    }
    
    $scope.convertToString = function(des){
        
        return des;
    }
    
}]);





