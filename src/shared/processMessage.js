const whatsAppModel = require("../shared/whatsAppModels");
const whatsAppService = require("../services/whatsappService");
const camisaMessage = require("../shared/Catalogos/Camisas/camisaMessage");
const pantalonMessage = require("../shared/Catalogos/Pantalones/pantalonesMessage");
const calzadoMessage = require("../shared/Catalogos/Calzado/calzadoMessage");
const abrigoMessage = require("../shared/Catalogos/Abrigos/abrigoMessage");
const gorroMessage = require("../shared/Catalogos/Gorros/gorroMessage");
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
    else if(textUser.includes('👕 camisas') || textUser.includes('colores') || textUser.includes('diseños') || textUser.includes('materiales') || textUser.includes('precios')){
        camisaMessage.ProcessCamisa(textUser, number);
        return; // Salimos de la función porque ProcessCamisa se encarga de enviar los mensajes
    } else if (textUser.includes('👖 pantalones') || textUser.includes('colores') || textUser.includes('diseños') || textUser.includes('materiales') || textUser.includes('precios')) {
        pantalonMessage.ProcessPantalon(textUser, number);
        return; // Salimos de la función porque ProcessPantalon se encarga de enviar los mensajes
    } else if (textUser.includes('👟 calzado') || textUser.includes('colores') || textUser.includes('diseños') || textUser.includes('materiales') || textUser.includes('precios') ||  textUser.includes('ver modelos')) {
        calzadoMessage.ProcessCalzado(textUser, number);
        return; // Salimos de la función porque ProcessCalzado se encarga de enviar los mensajes
    } else if (textUser.includes('🧥 abrigos') || textUser.includes('colores') || textUser.includes('diseños') || textUser.includes('materiales') || textUser.includes('precios')) {
        abrigoMessage.ProcessAbrigo(textUser, number);
        return; // Salimos de la función porque ProcessAbrigo se encarga de enviar los mensajes
    } else if (textUser.includes('🧢 gorros') || textUser.includes('colores') || textUser.includes('diseños') || textUser.includes('materiales') || textUser.includes('precios')) {
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