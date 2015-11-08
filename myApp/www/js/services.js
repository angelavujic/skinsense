angular.module('starter.services', [])
.factory('States', function() {
  var states = [{
    id: 1,
    color: '#E6FAE3',
    icon: 'ion-checkmark-round',
    header: 'No Melanoma',
    body: 'The photographed skin appeared to be a benign lesion. While no medical action is needed, continue to care for your skin and repeat this test weekly.'
  }, {
    id: 2,
    color: '#FFF3C7',
    icon: 'ion-alert-circled',
    header: 'Suspected Melanoma',
    body: 'There is a chance that your skin is developing melanoma. Contact your doctor or dermatologist to remove the suspicious lesion and examine your skin.'
  }, {
    id: 3,
    color: '#FFF3C7',
    icon: 'ion-alert-circled',
    header: 'High Risk of Melanoma',
    body: 'Contact your doctor or dermatologist to remove the suspicious lesion and examine your skin.'
  }];

  return {
    get: function(stateId) {
      for (var i = 0; i < states.length; i++) {
        if (states[i].id === parseInt(stateId)) {
          return states[i];
        }
      }
      return null;
    }
  }
})

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  


  // Some fake testing data
  var chats = [{
    id: 0,
    name: '11/03/2015 5:55',
    lastText: 'Malignant',
    thumb: 'img/malig-2.png'
  }, {
    id: 1,
    name: '10/18/2015 06:53',
    lastText: 'Malignant',
    thumb: 'img/malig-1.png'
  }, {
    id: 2,
    name: '09/01/2015 09:55',
    lastText: 'Benign',
    thumb: 'img/benign-3.png'
  }, {
    id: 3,
    name: '08/02/2015 14:55',
    lastText: 'Benign',
    thumb: 'img/benign-2.png'
  }, {
    id: 4,
    name: '07/11/2015 03:55',
    lastText: 'Benign',
    thumb: 'img/benign-1.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
