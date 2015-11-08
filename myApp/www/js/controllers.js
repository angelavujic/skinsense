var controllers = angular.module('starter.controllers', [])

<<<<<<< Updated upstream
.controller('DashCtrl', function($scope, $state, $cordovaCamera, $cordovaFileTransfer) {
=======
.controller('DashCtrl', function($scope, $cordovaCamera, $cordovaFileTransfer, Chats) {

  alert(Chats);
>>>>>>> Stashed changes

  $scope.takePicture = function() {
    var options = { 
        quality : 75, 
        destinationType : Camera.DestinationType.FILE_URI,
        //destinationType : Camera.DestinationType.DATA_URL, 
        sourceType : Camera.PictureSourceType.CAMERA, 
        allowEdit : true,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 480,
        targetHeight: 480,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: false
    };

    $cordovaCamera.getPicture(options).then(function(imageData) {
        // $scope.imgURI = "data:image/jpeg;base64," + imageData;
        $scope.url = imageData;
<<<<<<< Updated upstream
        // alert('$scope.url: ' + $scope.url);
=======
        alert('$scope.url: ' + $scope.url);



>>>>>>> Stashed changes
        $scope.upload();
    }, function(err) {
        alert('oops');
        // An error occured. Show a message to the user
    });

  };

  $scope.upload = function() {
    var options = {/*
      fileKey: "corgis",
      fileName: "test.jpg",
      chunkedMode: false,
      mimeType: "image/jpeg"*/
      };

      var targetPath = $scope.url;
      
      $cordovaFileTransfer.upload("http://ec2-52-33-73-217.us-west-2.compute.amazonaws.com/upload", targetPath, options).then(function(result) {
          // alert("SUCCESS: " + JSON.stringify(result.response));
          $scope.progress = false;
          $state.go('tab.dash-results', {'state': 1});
      }, function(err) {
          // alert("ERROR: " + JSON.stringify(err));
          $scope.progress = false;
      }, function (progress) {
        $scope.progress = true;
      });
  };
})

.controller('ResultsCtrl', function($scope, $stateParams, States) {
  $scope.state = States.get($stateParams.state);
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
