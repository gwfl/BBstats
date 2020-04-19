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

  $rootScope.accGroup = [];  // grp00={ name: "__", isShown: false };
//  for (hh = 0; hh < 20; hh++) {        
//    $rootScope.accGroup.push(JSON.parse(JSON.stringify(tS00)));
//  };

  $http.get('https://api.airtable.com/v0/app0hohtq4b1nM0Kb/LookItUp?api_key=key66fQg5IghIIQmb')
    .success(function (jData) {
  $rootScope.rawS = jData.records;
//      $rootScope.rawS = JSON.parse(JSON.stringify(jData.records));
    });

})

.controller('AppCtrl', function($rootScope, $scope, $http) {

  //

});
