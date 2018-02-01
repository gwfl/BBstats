angular.module('BBstatsH', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "menu.html",
    controller: 'AppCtrl'
  })

  /* 
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
      .state('app.single', {
        url: "/main/:playlistId",
        views: {
          'menuContent' :{
            templateUrl: "playlist.html",
            controller: 'PlaylistCtrl'
          }
        }
      })
  */

  .state('app.roster', {
    url: "/roster",
    views: {
      'menuContent' :{
        templateUrl: "roster.html"
      }
    }
  })
  .state('app.main', {
    url: "/main",
    views: {
      'menuContent': {
        templateUrl: "main.html",
        controller: 'AppCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/main');

})

.run(function($ionicPlatform, $rootScope) {
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
    if (storageAvailable('sessionStorage')) {
      // Yippee! We can use localStorage awesomeness
      $rootScope.appLog = " ";
    }

    $rootScope.vGm00 = {
      vGH: {
        pp: 0,
        ff: 0,
        tt: 0
      },
      vGV: {
        pp: 0,
        ff: 0,
        tt: 0
      },
      vP: [  { Nm: "Isaiah", Nu: 0, onc: false, pp: 0, pf: 0, rrfg: 0, rr3p: 0, rrft: 0, inG: 0, outG: 0, totPss: 0, y2p: 0, x2p: 0, y3p: 0, x3p: 0, yft: 0, xft: 0, ast: 0, stl: 0, drb: 0, orb: 0, tov: 0, blk: 0, tf: 0 },
      { Nm: "Zafer", Nu: 0, onc: false, pp: 0, pf: 0, rrfg: 0, rr3p: 0, rrft: 0, inG: 0, outG: 0, totPss: 0, y2p: 0, x2p: 0, y3p: 0, x3p: 0, yft: 0, xft: 0, ast: 0, stl: 0, drb: 0, orb: 0, tov: 0, blk: 0, tf: 0 }, 
      { Nm: "Carlos", Nu: 0, onc: false, pp: 0, pf: 0, rrfg: 0, rr3p: 0, rrft: 0, inG: 0, outG: 0, totPss: 0, y2p: 0, x2p: 0, y3p: 0, x3p: 0, yft: 0, xft: 0, ast: 0, stl: 0, drb: 0, orb: 0, tov: 0, blk: 0, tf: 0 },  
      { Nm: "Landen", Nu: 0, onc: false, pp: 0, pf: 0, rrfg: 0, rr3p: 0, rrft: 0, inG: 0, outG: 0, totPss: 0, y2p: 0, x2p: 0, y3p: 0, x3p: 0, yft: 0, xft: 0, ast: 0, stl: 0, drb: 0, orb: 0, tov: 0, blk: 0, tf: 0 },  
      { Nm: "Mason", Nu: 0, onc: false, pp: 0, pf: 0, rrfg: 0, rr3p: 0, rrft: 0, inG: 0, outG: 0, totPss: 0, y2p: 0, x2p: 0, y3p: 0, x3p: 0, yft: 0, xft: 0, ast: 0, stl: 0, drb: 0, orb: 0, tov: 0, blk: 0, tf: 0 }, 
      { Nm: "Yousuf", Nu: 0, onc: false, pp: 0, pf: 0, rrfg: 0, rr3p: 0, rrft: 0, inG: 0, outG: 0, totPss: 0, y2p: 0, x2p: 0, y3p: 0, x3p: 0, yft: 0, xft: 0, ast: 0, stl: 0, drb: 0, orb: 0, tov: 0, blk: 0, tf: 0 },
      { Nm: "Connor", Nu: 0, onc: false, pp: 0, pf: 0, rrfg: 0, rr3p: 0, rrft: 0, inG: 0, outG: 0, totPss: 0, y2p: 0, x2p: 0, y3p: 0, x3p: 0, yft: 0, xft: 0, ast: 0, stl: 0, drb: 0, orb: 0, tov: 0, blk: 0, tf: 0 },
      { Nm: "Aidan", Nu: 0, onc: false, pp: 0, pf: 0, rrfg: 0, rr3p: 0, rrft: 0, inG: 0, outG: 0, totPss: 0, y2p: 0, x2p: 0, y3p: 0, x3p: 0, yft: 0, xft: 0, ast: 0, stl: 0, drb: 0, orb: 0, tov: 0, blk: 0, tf: 0 },
      { Nm: "Aakash", Nu: 0, onc: false, pp: 0, pf: 0, rrfg: 0, rr3p: 0, rrft: 0, inG: 0, outG: 0, totPss: 0, y2p: 0, x2p: 0, y3p: 0, x3p: 0, yft: 0, xft: 0, ast: 0, stl: 0, drb: 0, orb: 0, tov: 0, blk: 0, tf: 0 },
      { Nm: "Zach", Nu: 0, onc: false, pp: 0, pf: 0, rrfg: 0, rr3p: 0, rrft: 0, inG: 0, outG: 0, totPss: 0, y2p: 0, x2p: 0, y3p: 0, x3p: 0, yft: 0, xft: 0, ast: 0, stl: 0, drb: 0, orb: 0, tov: 0, blk: 0, tf: 0 },
      { Nm: "Bryan", Nu: 0, onc: false, pp: 0, pf: 0, rrfg: 0, rr3p: 0, rrft: 0, inG: 0, outG: 0, totPss: 0, y2p: 0, x2p: 0, y3p: 0, x3p: 0, yft: 0, xft: 0, ast: 0, stl: 0, drb: 0, orb: 0, tov: 0, blk: 0, tf: 0 }  ]
    };
    localStorage.setItem('vGm00', JSON.stringify($rootScope.vGm00));

    if (localStorage.getItem('vGm') !== null) {
      $rootScope.vGm = JSON.parse(localStorage.getItem('vGm'));
    } else {
      $rootScope.vGm = JSON.parse(localStorage.getItem('vGm00'));
    }

    localStorage.setItem('vGm', JSON.stringify($rootScope.vGm));
//    $rootScope.appLog += ".run";
  
  }) //  end .run

.controller('AppCtrl', function($scope, $rootScope) {
//  $rootScope.appLog += ".AppC";

  $scope.tglundoCB = function() {
    $scope.undoCB = !$scope.undoCB;
  };

  $scope.pTally = function(tt, xx) {

    if ($scope.undoCB) {
      undo = -1;
      $rootScope.appLog = '-- ' + tt; //  
    } else {
      undo = 1;
      $rootScope.appLog = '> ' + tt; //  
    }

    if (xx < 0) {
      $scope.ttIdx = tt;
    } else {
      $rootScope.vGm.vP[xx].onc2 = false;
      $scope.undoCB = false;
      $scope.ttIdx = '.';
      $rootScope.appLog +=  ' :' + $rootScope.vGm.vP[xx].Nu //  
    }
    
    switch (tt) {
      case 'y2p':
        if (xx < 0) {
          $rootScope.vGm.vGH.pp += 2 * undo;
        } else {
          $rootScope.vGm.vP[xx].pp += 2 * undo;
          $rootScope.vGm.vP[xx].y2p += 1 * undo;
          $rootScope.vGm.vP[xx].rrfg = Math.round(($rootScope.vGm.vP[xx].y2p / ($rootScope.vGm.vP[xx].x2p + $rootScope.vGm.vP[xx].y2p)) * 100);
        }
        break;
      case 'x2p':
        if (xx < 0) {
          // $rootScope.vGm.vGH.pp += 0 * undo; 
        } else {
          $rootScope.vGm.vP[xx].x2p += 1 * undo;
          $rootScope.vGm.vP[xx].rrfg = Math.round(($rootScope.vGm.vP[xx].y2p / ($rootScope.vGm.vP[xx].x2p + $rootScope.vGm.vP[xx].y2p)) * 100);
        }
        break;
      case 'y3p':
        if (xx < 0) {
          $rootScope.vGm.vGH.pp += 3 * undo;
        } else {
          $rootScope.vGm.vP[xx].pp += 3 * undo;
          $rootScope.vGm.vP[xx].y3p += 1 * undo;
          $rootScope.vGm.vP[xx].rr3p = Math.round(($rootScope.vGm.vP[xx].y3p / ($rootScope.vGm.vP[xx].x3p + $rootScope.vGm.vP[xx].y3p)) * 100);
        }
        break;
      case 'x3p':
        if (xx < 0) {
          // $rootScope.vGm.vGH.pp += 0 * undo; 
        } else {
          $rootScope.vGm.vP[xx].x3p += 1 * undo;
          $rootScope.vGm.vP[xx].rr3p = Math.round(($rootScope.vGm.vP[xx].y3p / ($rootScope.vGm.vP[xx].x3p + $rootScope.vGm.vP[xx].y3p)) * 100);
        }
        break;
      case 'yft':
        if (xx < 0) {
          $rootScope.vGm.vGH.pp += 1 * undo;
        } else {
          $rootScope.vGm.vP[xx].pp += 1 * undo;
          $rootScope.vGm.vP[xx].yft += 1 * undo;
          $rootScope.vGm.vP[xx].rrft = Math.round(($rootScope.vGm.vP[xx].yft / ($rootScope.vGm.vP[xx].xft + $rootScope.vGm.vP[xx].yft)) * 100);
        }
        break;
      case 'xft':
        if (xx < 0) {
          // $rootScope.vGm.vGH.pp += 0 * undo; 
        } else {
          $rootScope.vGm.vP[xx].xft += 1 * undo;
          $rootScope.vGm.vP[xx].rrft = Math.round(($rootScope.vGm.vP[xx].yft / ($rootScope.vGm.vP[xx].xft + $rootScope.vGm.vP[xx].yft)) * 100);
        }
        break;
      case 'ast':
        if (xx < 0) {
          // $rootScope.vGm.vGH.pp += 0 * undo; 
        } else {
          $rootScope.vGm.vP[xx].ast += 1 * undo;
        }
        break;
      case 'stl':
        if (xx < 0) {
          // $rootScope.vGm.vGH.pp += 0 * undo; 
        } else {
          $rootScope.vGm.vP[xx].stl += 1 * undo;
        }
        break;
      case 'blk':
        if (xx >= 0) {
          $rootScope.vGm.vP[xx].blk += 1 * undo;
        }
        break;
      case 'drb':
        if (xx < 0) {
          // $rootScope.vGm.vGH.pp += 0 * undo; 
        } else {
          $rootScope.vGm.vP[xx].drb += 1 * undo;
        }
        break;
      case 'orb':
        if (xx < 0) {
          // $rootScope.vGm.vGH.pp += 0 * undo; 
        } else {
          $rootScope.vGm.vP[xx].orb += 1 * undo;
        }
        break;
      case 'tov':
        if (xx < 0) {
          // $rootScope.vGm.vGH.pp += 0 * undo; 
        } else {
          $rootScope.vGm.vP[xx].tov += 1 * undo;
        }
        break;
      case 'pf':
        if (xx < 0) {
          $rootScope.vGm.vGH.ff += 1 * undo;
        } else {
          $rootScope.vGm.vP[xx].pf += 1 * undo;
        }
        break;
      case 'tf':
        if (xx < 0) {
          // $rootScope.vGm.vGH.pp += 0 * undo; 
        } else {
          $rootScope.vGm.vP[xx].tf += 1 * undo;
        }
        break;
      case 'v2p':
        $rootScope.vGm.vGV.pp += 2 * undo;
        $scope.undoCB = false;
        break;
      case 'v3p':
        $rootScope.vGm.vGV.pp += 3 * undo;
        $scope.undoCB = false;
        break;
      case 'vft':
        $rootScope.vGm.vGV.pp += 1 * undo;
        $scope.undoCB = false;
        break;
      case 'vpf':
        $rootScope.vGm.vGV.ff += 1 * undo;
        $scope.undoCB = false;
        break;
      default:
        $rootScope.appLog = ">";
        break;
    }

    localStorage.setItem('vGm', JSON.stringify($rootScope.vGm));
  };
  
  $scope.resetLS = function() {
    localStorage.removeItem('vGm'); // clear();   
    $rootScope.vGm = JSON.parse(localStorage.getItem('vGm00'));
  };

   var dNow = JSON.stringify($rootScope.vGm);
 $scope.data =   JSON.stringify({"name":"gwfLEEdb!!","rawScore":10,"vGMstats":dNow,"type":"rbyb-2" });
$http.put('https://gwfl-256d.restdb.io/rest/scores/5a6b9e9da07bee72000109a7?apikey=5821f61550e9b39131fe1b6f', $scope.data);
  
});
