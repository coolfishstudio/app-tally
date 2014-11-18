angular.module('starter.controllers', [])

.controller('AppCtrl', ["$scope", "$ionicModal", "$timeout", "$location",
  function($scope, $ionicModal, $timeout, $location) {
  // Form data for the login modal
  $scope.loginData = {};

//-- 首页到登陆
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.loginModal = modal;
  });

  $scope.closeLogin = function() {
    $scope.loginModal.hide();
  };
  $scope.login = function() {
    $scope.loginModal.show();
  };
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);
    $timeout(function() {
      $scope.closeLogin();
      // $location.path('/app/main');
       $location.path('/app/main');
    }, 1000);
  };
    // //-- 登陆到引导页
    // $ionicModal.fromTemplateUrl('templates/welcome.html', {
    //   scope: $scope
    // }).then(function(modal) {
    //   $scope.welcome = modal;
    // });
    // // Open the login modal
    // $scope.welcome = function() {
      
    // };

  // Perform the login action when the user submits the login form
}])




.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: '列表1', id: 1 },
    { title: '列表2', id: 2 },
    { title: '列表3', id: 3 },
    { title: '列表4', id: 4 },
    { title: '列表5', id: 5 },
    { title: '列表6', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
