// SERVICES
weatherApp.service('cityService', function() {
   
    this.city = "New York, NY";
    
});

weatherApp.service('weatherService', ['$resource', function($resource) {
   
    this.GetWeather = function(city, days) {
        var weatherAPI = $resource(
      'http://api.openweathermap.org/data/2.5/forecast/daily?APPID=ef316890bbb3d1599447535b71569fa3',{ get: { method: 'JSONP' }});
    
        return weatherResult = weatherAPI.get({ q: city, cnt: days });
    };
    
}]);




















