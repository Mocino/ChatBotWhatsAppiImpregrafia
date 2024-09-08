const whatsAppModel = require("../shared/whatsAppModels");
const whatsAppService = require("../services/whatsappService");
const camisaMessage = require("../shared/Catalogos/Camisas/camisaMessage");
const pantalonMessage = require("../shared/Catalogos/Pantalones/pantalonesMessage");
const calzadoMessage = require("../shared/Catalogos/Calzado/calzadoMessage");
const abrigoMessage = require("../shared/Catalogos/Abrigos/abrigoMessage");
const gorroMessage = require("../shared/Catalogos/Gorros/gorroMessage");

const RespuestasCamisas = require("../shared/Respuestas/RespuestasCamisas");
const RespuestasAbrigos = require("../shared/Respuestas/RespuestasAbrigos");
const RespuestasPantalones = require("../shared/Respuestas/RespuestasPantalones");
const RespuestasCalzado = require("../shared/Respuestas/RespuestasCalzado");
const RespuestasGorros = require("../shared/Respuestas/RespuestasGorros");

//const { text } = require("express");

function Process(textUser, number){
    textUser = textUser.toLowerCase();
    var models = [];

    if(textUser.includes('hola')){
        var model = whatsAppModel.MessageText("hola, un gusto saludarte, estas hablando con el asistente virtual de impregrafia", number);
        models.push(model);  // Se agrega primero a la lista

        var modelList = whatsAppModel.MessageList(number);
        models.push(modelList);  // Se agrega después a la lista
    }    
    else if(textUser.includes('gracias')){
        var model = whatsAppModel.MessageText("Gracias a ti por escribirme", number);
        models.push(model);
    }
    else if(RespuestasCamisas.getAllCamisaKeywords().some(palabra => textUser.includes(palabra))){
        camisaMessage.ProcessCamisa(textUser, number);
        return; // Salimos de la función porque ProcessCamisa se encarga de enviar los mensajes
    }     
    else if (RespuestasPantalones.pantalones.some(palabra => textUser.includes(palabra))) {
        pantalonMessage.ProcessPantalon(textUser, number);
        return; // Salimos de la función porque ProcessPantalon se encarga de enviar los mensajes
    } 
    else if (RespuestasCalzado.calzado.some(palabra => textUser.includes(palabra))) {
        calzadoMessage.ProcessCalzado(textUser, number);
        return; // Salimos de la función porque ProcessCalzado se encarga de enviar los mensajes
    }
    else if (RespuestasAbrigos.getAllAbrigoKeywords().some(palabra => textUser.includes(palabra)))
    {
        abrigoMessage.ProcessAbrigo(textUser, number);
        return; 
    }     
    else if (RespuestasGorros.gorros.some(palabra => textUser.includes(palabra))) {
        gorroMessage.ProcessGorro(textUser, number);
        return; // Salimos de la función porque ProcessGorro se encarga de enviar los mensajes
    }
    else {
        var model = whatsAppModel.MessageText("No entiendo lo que dices", number);
        models.push(model);
    }
    
    models.forEach(model => {
        whatsAppService.SendMessageWhatsApp(model);
    })
};

module.exports = {
    Process
};