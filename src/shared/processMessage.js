const whatsAppModel = require("../shared/whatsAppModels");
const whatsAppService = require("../services/whatsappService");
const camisaMessage = require("../shared/Catalogos/Camisas/camisaMessage");
const pantalonMessage = require("../shared/Catalogos/Pantalones/pantalonesMessage");
const calzadoMessage = require("../shared/Catalogos/Calzado/calzadoMessage");
const abrigoMessage = require("../shared/Catalogos/Abrigos/abrigoMessage");
const gorroMessage = require("../shared/Catalogos/Gorros/gorroMessage");

const RespuestasCamisas = require("../shared/Respuestas/RespuestasCamisas");

const { text } = require("express");

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
    else if(RespuestasCamisas.camisas.some(palabra => textUser.includes(palabra))){
        camisaMessage.ProcessCamisa(textUser, number);
        return; // Salimos de la función porque ProcessCamisa se encarga de enviar los mensajes
    } else if (textUser.includes('👖 pantalones') || 
               textUser.includes('colores de pantalones') || 
               textUser.includes('diseños de pantalones') || 
               textUser.includes('materiales de pantalones') || 
               textUser.includes('precios de pantalones')) {
        pantalonMessage.ProcessPantalon(textUser, number);
        return; // Salimos de la función porque ProcessPantalon se encarga de enviar los mensajes
    } else if (textUser.includes('👟 calzado') || 
               textUser.includes('colores de calzado') || 
               textUser.includes('diseños de calzado') || 
               textUser.includes('materiales de calzado') || 
               textUser.includes('precios de calzado') ||  
               textUser.includes('ver modelos de calzado')) {
        calzadoMessage.ProcessCalzado(textUser, number);
        return; // Salimos de la función porque ProcessCalzado se encarga de enviar los mensajes
    }else if (textUser.includes('🧥 abrigos') || 
              textUser.includes('colores de abrigos') || 
              textUser.includes('diseños de abrigos') || 
              textUser.includes('materiales de abrigos') || 
              textUser.includes('precios de abrigos') || 
              textUser.includes('abrigo negro') ||  
              textUser.includes('abrigo gris') ||  
              textUser.includes('abrigo marrón')
    ) {
        abrigoMessage.ProcessAbrigo(textUser, number);
        return; // Salimos de la función porque ProcessAbrigo se encarga de enviar los mensajes
    }    
     else if (textUser.includes('🧢 gorros') || 
              textUser.includes('colores de gorra') || 
              textUser.includes('diseños de gorra') || 
              textUser.includes('materiales de gorra') || 
              textUser.includes('precios de gorra')) {
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