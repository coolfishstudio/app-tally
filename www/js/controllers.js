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
})


//---主界面
.controller('MainCtrl', ["$scope", "$ionicModal", "$timeout", "$location", 
    function($scope, $ionicModal, $timeout, $location){

    $scope.countData = {};
    //-- 记账面板
    $ionicModal.fromTemplateUrl('templates/count.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.countModal = modal;
    });
    //关闭面板
    $scope.closeCount = function(){
        $scope.countModal.hide();
    };
    //打开面板
    $scope.count = function(){
        console.log('11111');
        $scope.countModal.show();
    };
    //提交处理
    $scope.doCount = function(){
        console.log('Doing count', $scope.countData);
        $timeout(function(){
            $scope.closeCount();
        }, 1000);
    };
    
}]);