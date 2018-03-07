app.service('messageService', ['$http', function($http){
    console.log('messageService created')
    let self = this;
    self.chat = {};
    self.log = {};
  
    self.submit = function(chat){
      console.log('in self.submit', chat);
      $http({
        method: 'POST',
        url: '/Message',
        data: chat
      })
      .then(function(response){
        console.log('success in submit post');
        self.display();
      })
    }
    //end self.submit
  
    self.display = function(){
      console.log('in self.display');
      $http({
        method: 'GET',
        url: '/Message',
      })
      .then(function(response){
        console.log('success in GET', response.data);
  
        self.log.messages = response.data;
      })
    }
    //end self.display
    self.display();
  }])//end messageService