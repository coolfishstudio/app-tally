angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };


  //----测试
})

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
