// Ionic Starter App, v0.9.20

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "menu.html",
      controller: 'AppCtrl'
    })

    .state('app.search', {
      url: "/search",
      views: {
        'menuContent' :{
          templateUrl: "search.html"
        }
      }
    })

    .state('app.browse', {
      url: "/browse",
      views: {
        'menuContent' :{
          templateUrl: "browse.html"
        }
      }
    })
    .state('app.playlists', {
      url: "/playlists",
      views: {
        'menuContent' :{
          templateUrl: "playlists.html",
          controller: 'PlaylistsCtrl'
        }
      }
    })

    .state('app.single', {
      url: "/playlists/:playlistId",
      views: {
        'menuContent' :{
          templateUrl: "playlist.html",
          controller: 'PlaylistCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/playlists');
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Gabe', id: 0, show: false },
    { title: 'Chace', id: 1, show: true },
    { title: 'Sky', id: 2, show: false },
    { title: 'Brandon', id: 3, show: false },
    { title: 'Damien', id: 4, show: false },
    { title: 'Cody', id: 5, show: false },
    { title: 'Aidan', id: 10, show: false },
    { title: 'Mason', id: 11, show: false },
    { title: 'Miguel', id: 12, show: false }  
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('AppCtrl', function($scope) {
});
