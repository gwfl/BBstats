var ionApp = angular.module('BBstatsH', ['ionic', 'ngResource']);

ionApp.config(function($stateProvider, $urlRouterProvider) {
 $stateProvider
  .state('app.main', {
    url: "/main",
    views: {
      'menuContent': {
        templateUrl: "main.html",
        controller: 'AppCtrl'
      }
    }
  })
  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "menu.html"
  });
/*  
  })
  .state('app.roster', {
    url: "/roster",
    views: {
      'menuContent': {
        templateUrl: "roster.html",
        controller: 'AppCtrl'
      }
    }
*/    
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/main');
});

ionApp.factory('dbSvc', function ($resource, $http) {

  var _ngr = function () {
    var url = 'https://gwfl-256d.restdb.io/rest/songlist/:id?apikey=5821f61550e9b39131fe1b6f';
    return $resource(url);
  };

  var _initRoster = function () { 
    $http.get('https://api.airtable.com/v0/app0hohtq4b1nM0Kb/Players/recKbHjCbXLbJuSuJ?api_key=key66fQg5IghIIQmb')    // /recKbHjCbXLbJuSuJ
      .success(function (jsonData) {
        localStorage.setItem('ls_vGM00', JSON.stringify(jsonData.fields.vGMstats));
    });
  };

  var _allSongs = function () {
//    return $resource('https://api.airtable.com/v0/app0hohtq4b1nM0Kb/Players?api_key=key66fQg5IghIIQmb');
    return $resource('https://gwfl-256d.restdb.io/rest/songlist?apikey=5821f61550e9b39131fe1b6f');
  };

  var _scoreById = function () {
    var url = 'https://gwfl-256d.restdb.io/rest/scores/:recId?apikey=5821f61550e9b39131fe1b6f';    //  5a6b9e9da07bee72000109a7 
    return $resource(url,      
    { recId: '@_id' }, 
    { update: { method: 'PUT' } }
  )};
    
  return {
    initRoster: _initRoster(),
    scoreById: _scoreById,
    allSongs: _allSongs().query()
  };
});

ionApp.run( function ($rootScope, $http, dbSvc, $ionicPlatform) {

  $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      //  if(window.cordova && window.cordova.plugins.Keyboard) {
      //    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      //  }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });

  function storageAvailable(type) {
    try {
      var storage = window[type],
        x = '__storage_test__';
      storage.setItem(x, x);
      storage.clear();
      return true;
    } catch (e) {
      return false;
    }
  }

  $rootScope.appLog = "Sorry, No Storage Here.";
  if (storageAvailable('localStorage')) {
    // Yippee! We can use localStorage awesomeness
    $rootScope.appLog = ".r0 ";
  }
  // localStorage.removeItem('ls_vGMstats');
  dbSvc.initRoster;
  // $rootScope.appLog += ".r" + localStorage.getItem('ls_vGM00');

});      //  end .run

ionApp.controller('AppCtrl', function($scope, $rootScope, $http, $resource, $timeout) {

var timer = function() {
    $rootScope.appLog += ".t1 ";
    // https://gwfl-256d.restdb.io/rest/scores/5a6b9e9da07bee72000109a7?apikey=5821f61550e9b39131fe1b6f
    // https://api.airtable.com/v0/app0hohtq4b1nM0Kb/Players/recKbHjCbXLbJuSuJ?api_key=key66fQg5IghIIQmb
  $http.get('https://gwfl-256d.restdb.io/rest/scores/5a6b9e9da07bee72000109a7?apikey=5821f61550e9b39131fe1b6f') 
    .success(function (jsonData) {
      $scope.vGm = jsonData.vGMstats;
  });
  
  $timeout(timer, 5000);    // 1 second delay
};
        
$timeout(timer, 250);  

});
