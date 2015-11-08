angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $cordovaCamera, $cordovaFileTransfer) {

  $scope.takePicture = function() {
    var options = { 
        quality : 75, 
        destinationType : Camera.DestinationType.FILE_URI,
        // destinationType : Camera.DestinationType.DATA_URL, 
        sourceType : Camera.PictureSourceType.CAMERA, 
        allowEdit : true,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 300,
        targetHeight: 300,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: false
    };

    $cordovaCamera.getPicture(options).then(function(imageData) {
        // $scope.imgURI = "data:image/jpeg;base64," + imageData;
        $scope.url = imageData;
        alert('$scope.url: ' + $scope.url);
        $scope.upload();
    }, function(err) {
        alert('oops');
        // An error occured. Show a message to the user
    });
  };

  $scope.upload = function() {
    var options = {
      fileKey: "corgis",
      fileName: "test.jpg",
      chunkedMode: false,
      mimeType: "image/jpeg"
      };

      var targetPath = $scope.url;
      
      $cordovaFileTransfer.upload("http://ec2-52-32-82-147.us-west-2.compute.amazonaws.com/upload", targetPath, options).then(function(result) {
          alert("SUCCESS: " + JSON.stringify(result.response));
      }, function(err) {
          alert("ERROR: " + JSON.stringify(err));
      }, function (progress) {
          alert("PROGRESS");
      });
  };
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
