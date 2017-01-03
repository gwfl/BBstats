// Ionic Starter App, v0.9.20

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "menu.html",
      controller: 'PlaylistsCtrl'
    })
    .state('app.playlists', {
      url: "/playlists",
      views: {
        'menuContent' :{
          templateUrl: "playlists.html",
          controller: 'PlaylistsCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/playlists');

})

.factory('Utils00', function($http, $interval) {
  var ii = 0,
    jj = 0,
    kk = 0,
    ss = "",
    aa = [],
    jsonData = [],
    BBstatsLog = "";
	
}) // end service Utils00

.run(function($ionicPlatform, $rootScope) {
  $ionicPlatform.ready(function() {
  // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
  // for form inputs)
  //  if(window.cordova && window.cordova.plugins.Keyboard) {
  //    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
  //  }
    if(window.StatusBar) {
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
	}
	catch(e) {
		return false;
	}
}

$rootScope.appLog = "Sorry, No Storage Here.";
if (storageAvailable('sessionStorage')) {
	// Yippee! We can use localStorage awesomeness
	$rootScope.appLog = " ";
}


if (localStorage.getItem('vGm') !== null) { 
  $rootScope.vGm = JSON.parse(localStorage.getItem('vGm'));
  console.log("getItem:vGm ", $rootScope.vGm.vGV.pp);
}  else {
$rootScope.vGm = {
  vGH: { pp: 0, ff: 0, tt: 0 },
  vGV: { pp: 0, ff: 0, tt: 0 },
  vP: [
  { "Nm": "Damien",  "Nu": "4", "onc": false, 
    "pp": 0,  "pf": 0, "rrfg": 0, "rr3p": 0, "rrft": 0,
    "inG": 0, "outG": 0, "totPss": 0,
    "y2p": 0, "x2p": 0, "y3p": 0, "x3p": 0, 
    "yft": 0, "xft": 0, "ast": 0, "stl": 0, 
    "drb": 0, "orb": 0, "tov": 0, "blk": 0, "tf": 0 },
  { "Nm": "Brandon",  "Nu": "3" , "onc": false, 
    "pp": 0,  "pf": 0, "rrfg": 0, "rr3p": 0, "rrft": 0,
    "inG": 0, "outG": 0, "totPss": 0,
    "y2p": 0, "x2p": 0, "y3p": 0, "x3p": 0, 
    "yft": 0, "xft": 0, "ast": 0, "stl": 0, 
    "drb": 0, "orb": 0, "tov": 0, "blk": 0, "tf": 0 },
  { "Nm": "Sky",  "Nu": "2" , "onc": false, 
    "pp": 0,  "pf": 0, "rrfg": 0, "rr3p": 0, "rrft": 0,
    "inG": 0, "outG": 0, "totPss": 0,
    "y2p": 0, "x2p": 0, "y3p": 0, "x3p": 0, 
    "yft": 0, "xft": 0, "ast": 0, "stl": 0, 
    "drb": 0, "orb": 0, "tov": 0, "blk": 0, "tf": 0 },
  { "Nm": "Mason",  "Nu": "11" , "onc": false, 
    "pp": 0,  "pf": 0, "rrfg": 0, "rr3p": 0, "rrft": 0,
    "inG": 0, "outG": 0, "totPss": 0,
    "y2p": 0, "x2p": 0, "y3p": 0, "x3p": 0, 
    "yft": 0, "xft": 0, "ast": 0, "stl": 0, 
    "drb": 0, "orb": 0, "tov": 0, "blk": 0, "tf": 0 },
  { "Nm": "Aidan",  "Nu": "10", "onc": false, 
    "pp": 0,  "pf": 0, "rrfg": 0, "rr3p": 0, "rrft": 0,
    "inG": 0, "outG": 0, "totPss": 0,
    "y2p": 0, "x2p": 0, "y3p": 0, "x3p": 0, 
    "yft": 0, "xft": 0, "ast": 0, "stl": 0, 
    "drb": 0, "orb": 0, "tov": 0, "blk": 0, "tf": 0 },
  { "Nm": "Chace",  "Nu": "1"  , "onc": false, 
    "pp": 0,  "pf": 0, "rrfg": 0, "rr3p": 0, "rrft": 0,
    "inG": 0, "outG": 0, "totPss": 0,
    "y2p": 0, "x2p": 0, "y3p": 0, "x3p": 0, 
    "yft": 0, "xft": 0, "ast": 0, "stl": 0, 
    "drb": 0, "orb": 0, "tov": 0, "blk": 0, "tf": 0 },
  { "Nm": "Miguel",  "Nu": "00"  , "onc": false, 
    "pp": 0,  "pf": 0, "rrfg": 0, "rr3p": 0, "rrft": 0,
    "inG": 0, "outG": 0, "totPss": 0,
    "y2p": 0, "x2p": 0, "y3p": 0, "x3p": 0, 
    "yft": 0, "xft": 0, "ast": 0, "stl": 0, 
    "drb": 0, "orb": 0, "tov": 0, "blk": 0, "tf": 0 },
  { "Nm": "Cody",  "Nu": "5"  , "onc": false, 
    "pp": 0,  "pf": 0, "rrfg": 0, "rr3p": 0, "rrft": 0,
    "inG": 0, "outG": 0, "totPss": 0,
    "y2p": 0, "x2p": 0, "y3p": 0, "x3p": 0, 
    "yft": 0, "xft": 0, "ast": 0, "stl": 0, 
    "drb": 0, "orb": 0, "tov": 0, "blk": 0, "tf": 0 },
  { "Nm": "Gabe",  "Nu": "00"  , "onc": false, 
    "pp": 0,  "pf": 0, "rrfg": 0, "rr3p": 0, "rrft": 0,
    "inG": 0, "outG": 0, "totPss": 0,
    "y2p": 0, "x2p": 0, "y3p": 0, "x3p": 0, 
    "yft": 0, "xft": 0, "ast": 0, "stl": 0, 
    "drb": 0, "orb": 0, "tov": 0, "blk": 0, "tf": 0 }
  ]  
};
  
}

localStorage.setItem('vGm', JSON.stringify($rootScope.vGm));   

})    //  end .run

.controller('PlaylistsCtrl', function($scope, $rootScope, Utils00) {

$scope.pTally = function (tt, xx) {

    switch (tt) {
      case 'y2p':
        $rootScope.vGm.vP[xx].pp += 2;
        $rootScope.vGm.vGH.pp += 2;
        $rootScope.vGm.vP[xx].y2p++;
        $rootScope.vGm.vP[xx].rrfg = Math.round((($rootScope.vGm.vP[xx].y2p + $rootScope.vGm.vP[xx].y3p) / ($rootScope.vGm.vP[xx].x2p + $rootScope.vGm.vP[xx].y2p + $rootScope.vGm.vP[xx].x3p + $rootScope.vGm.vP[xx].y3p)) * 100);
        break;
      case 'x2p':
        $rootScope.vGm.vP[xx].x2p++;
        $rootScope.vGm.vP[xx].rrfg = Math.round((($rootScope.vGm.vP[xx].y2p + $rootScope.vGm.vP[xx].y3p) / ($rootScope.vGm.vP[xx].x2p + $rootScope.vGm.vP[xx].y2p + $rootScope.vGm.vP[xx].x3p + $rootScope.vGm.vP[xx].y3p)) * 100);
        break;
      case 'y3p':
        $rootScope.vGm.vP[xx].pp += 3;
        $rootScope.vGm.vGH.pp += 3;
        $rootScope.vGm.vP[xx].y3p++;
        $rootScope.vGm.vP[xx].rr3p = Math.round(($rootScope.vGm.vP[xx].y3p / ($rootScope.vGm.vP[xx].x3p + $rootScope.vGm.vP[xx].y3p)) * 100);
        $rootScope.vGm.vP[xx].rrfg = Math.round((($rootScope.vGm.vP[xx].y2p + $rootScope.vGm.vP[xx].y3p) / ($rootScope.vGm.vP[xx].x2p + $rootScope.vGm.vP[xx].y2p + $rootScope.vGm.vP[xx].x3p + $rootScope.vGm.vP[xx].y3p)) * 100);
        break;
      case 'x3p':
        $rootScope.vGm.vP[xx].x3p++;
        $rootScope.vGm.vP[xx].rr3p = Math.round(($rootScope.vGm.vP[xx].y3p / ($rootScope.vGm.vP[xx].x3p + $rootScope.vGm.vP[xx].y3p)) * 100);
        $rootScope.vGm.vP[xx].rrfg = Math.round((($rootScope.vGm.vP[xx].y2p + $rootScope.vGm.vP[xx].y3p) / ($rootScope.vGm.vP[xx].x2p + $rootScope.vGm.vP[xx].y2p + $rootScope.vGm.vP[xx].x3p + $rootScope.vGm.vP[xx].y3p)) * 100);
        break;
      case 'yft':
        $rootScope.vGm.vP[xx].pp++;
        $rootScope.vGm.vGH.pp++;
        $rootScope.vGm.vP[xx].yft++;
        $rootScope.vGm.vP[xx].rrft = Math.round(($rootScope.vGm.vP[xx].yft / ($rootScope.vGm.vP[xx].xft + $rootScope.vGm.vP[xx].yft)) * 100);
        break;
      case 'xft':
        $rootScope.vGm.vP[xx].xft++;
        $rootScope.vGm.vP[xx].rrft = Math.round(($rootScope.vGm.vP[xx].yft / ($rootScope.vGm.vP[xx].xft + $rootScope.vGm.vP[xx].yft)) * 100);
        break;
      case 'ast':
        $rootScope.vGm.vP[xx].ast++;
        break;
      case 'stl':
        $rootScope.vGm.vP[xx].stl++;
        break;
      case 'blk':
        $rootScope.vGm.vP[xx].blk++;
        break;
      case 'drb':
        $rootScope.vGm.vP[xx].drb++;
        break;
      case 'orb':
        $rootScope.vGm.vP[xx].orb++;
        break;
      case 'tov':
        $rootScope.vGm.vP[xx].tov++;
        break;
      case 'pf':
        $rootScope.vGm.vP[xx].pf++;
        $rootScope.vGm.vGH.ff++;
        break;
      case 'tf':
        $rootScope.vGm.vP[xx].tf++;
        break;
      case 'tf':
        $rootScope.vGm.vP[xx].tf++;
        break;
      case 'tf':
        $rootScope.vGm.vP[xx].tf++;
        break;
      case 'v2p':
        $rootScope.vGm.vGV.pp += 2;
        break;
      case 'v3p':
        $rootScope.vGm.vGV.pp += 3;
        break;
      case 'vft':
        $rootScope.vGm.vGV.pp++;
        break;
      case 'vpf':
        $rootScope.vGm.vGV.ff++;
        break;
      default:
        break;
    }

localStorage.setItem('vGm', JSON.stringify($rootScope.vGm));   
};

$scope.resetLS = function() {
  localStorage.clear();    // removeItem('vGm');   
  $rootScope.vGm.vGH.pp = 0;
  $rootScope.vGm.vGV.pp = 0;
};

});
