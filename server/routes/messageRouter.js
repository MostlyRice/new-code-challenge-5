const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema(
{
  name: {type: String, required: true},
  message: {type: String, required: true}
});//end ChatSchema

const Chat = mongoose.model('Chat', ChatSchema, 'ccfive_james' )

router.post('/', (request, response)=>{
  let newChat = new Chat (request.body);
  console.log('chat to add', newChat);
  newChat.save((error, addedChat)=>{
    if(error){
      console.log('error in posting chat', error);
      response.sendStatus(500);
    }else{
      response.sendStatus(201);
    }
  })
})//end post chat

router.get('/', (request, response)=>{
  Chat.find({}, (error, foundChats)=>{
    if(error){
      console.log('error in find chat', error);
      response.sendStatus(500);
    }else{
      console.log('in get', foundChats);
      response.send(foundChats);
    }
  })
})//end GET chat

module.exports = router;