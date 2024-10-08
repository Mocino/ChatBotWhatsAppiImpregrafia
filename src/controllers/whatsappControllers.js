const fs = require("fs");
const { type } = require("os");
const myConsole = new console.Console(fs.createWriteStream("./logs.txt"));
const processMessage = require("../shared/processMessage");
//const whatsappService = require("../services/whatsappService")
//const samples = require("../shared/sampleModel")


const VerifyToken = (req, res) => {
    try{
        var accessToken = "4JF9WSJC8SD9FNMK390KADJ8SD94JF9FNK390JF9WSJC8SD9FNMK";
        var token = req.query['hub.verify_token'];
        var challenge = req.query['hub.challenge'];

        if(challenge != null && token != null && token == accessToken){
            res.send(challenge);
        }else{
            res.status(400).send();
        }
    }catch(e){
        res.status(400).send();
    }
}

const ReceivedMessage = (req, res) => {
    try {
        var entry = (req.body['entry'])[0];
        var changes = (entry['changes'])[0];
        var value = changes['value'];
        var messageObject = value['messages'];  

        if (typeof messageObject != 'undefined') {
            var messages = messageObject[0];
            var number = messages['from'];
            var text = GetTextUser(messages).toLowerCase(); // Convertir texto a minúsculas

            let data;
            if (text != "") {
                myConsole.log(text);
                myConsole.log(number);
                processMessage.Process(text, number);
            }
    
            if (data) {
                whatsappService.SendMessageWhatsApp(data);
            }
    
            myConsole.log(text);
        }
  
        res.send("EVENT_RECEIVED");
    } catch (e) {
        myConsole.log(e);
        res.send("EVENT_RECEIVED");
    } 
}

function GetTextUser(messages){
    var text = '';
    var typeMessge = messages['type'];
    if(typeMessge == 'text'){
        text = (messages['text'])['body'];
    }
    else if(typeMessge == 'interactive'){
        var interactiveObject = messages['interactive'];
        var typeInteractive = interactiveObject['type'];
        myConsole.log(interactiveObject)

        if(typeInteractive == 'button_reply'){
            text = (interactiveObject['button_reply'])['title'];
        }
        else if (typeInteractive == 'list_reply'){
            text = (interactiveObject['list_reply'])['title']
        } else {
            myConsole.log('sin mensaje');
        }
    }else {
        myConsole.log('sin mensaje');
    }
    return text;
}

module.exports = {
    VerifyToken,
    ReceivedMessage
}