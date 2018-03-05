var app = angular.module( 'myApp', [ 'ngRoute' ] );
console.log( 'in the MyApp' );
const ChatController = myApp.controller( 'ChatController', ['$http', function($http){
    self.messages = MessageService.messages;
    self.submitButton = MessageService.submitButton;
    self.getAllMessages = MessageService.getAllMessages;
    
    let self = this;

    self.messages = {newMessage:{}, allMessages:[]};

    self.submitButton = function(newMessage){
        console.log('in submitButton function');
        $http({
            method: 'POST',
            url: '/message',
            data: {
                name: newMessage.name,
                message: newMessage.message
            }
          }).then(function(response) {
            self.messages.newMessage = {};
            console.log('Sent new message');
            self.getAllMessages();
          })
          .catch(function(error){
            console.log(error);
          })
    }

    self.getAllMessages = function(){
        console.log('In getAllMessages function');
        $http({
            method: 'GET',
            url: '/message'
        }).then(function(response){
            console.log('Got all messages:', response.data);
            self.messages.allMessages = response.data; 
            console.log('allMessages array:', self.messages.allMessages);
        }).catch(function(error){
            console.error('Error getting messages', error)
        })
    }

    self.getAllMessages();

  }]);
  
