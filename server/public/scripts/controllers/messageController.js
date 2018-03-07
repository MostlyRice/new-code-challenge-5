
const CC5Controller = app.controller('messageController', ['messageService', function(messageService){
    let self = this;
    self.chat = messageService.chat;
    self.submit = messageService.submit;
    self.log = messageService.log;
    self.clear = messageService.clear
  }])//end cc5Controller