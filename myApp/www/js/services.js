angular.module('starter.services', [])
.factory('States', function() {
  var states = [{
    id: 1,
    color: '#fabbbb',
    icon: '',
    header: 'No Melanoma',
    body: 'The photographed skin appeared to be a benign lesion. While no medical action is needed, continue to care for your skin and repeat this test weekly.'
  }, {
    id: 2,
    color: '#fabbbb',
    icon: '',
    header: 'Suspected Melanoma',
    body: 'There is a chance that your skin is developing melanoma. Contact your doctor or dermatologist to remove the suspicious lesion and examine your skin.'
  }, {
    id: 3,
    color: '#fabbbb',
    icon: '',
    header: 'Melanoma Confirmed',
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
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
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
