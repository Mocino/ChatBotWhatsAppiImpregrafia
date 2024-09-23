const whatsAppModel = require("../shared/whatsAppModels");
const whatsAppService = require("../services/whatsappService");

const abrigoMessage = require("../shared/Catalogos/Abrigos/abrigoMessage");
const RespuestasAbrigos = require("../shared/Respuestas/RespuestasAbrigos");

const MantasVinilicasMessage = require("../shared/Catalogos/MantasVinilicas/MantasVinilicasMessages");
const SublimacionMessage = require("../shared/Catalogos/Sublimacion/SublimacionMessages");
const UniformeDeportivoMessage = require("../shared/Catalogos/UniformeDeportivo/UniformeDeportivoMessages");
const RotulosMessage = require("../shared/Catalogos/Rotulos/RotulosMessages");
const PromocionalesMessage = require("../shared/Catalogos/Promocionales/PromocionalesMessages");
const BannerMessage = require("../shared/Catalogos/Banner/BannerMessages");
const FigurasMessage = require("../shared/Catalogos/Figuras/figurasMessage");

const RespuestasMantaVinilicas = require("../shared/Respuestas/RespuestasMantasVinilicas");
const RespuestasSublimacion = require("../shared/Respuestas/RespuestasSublimacion");
const RespuestasUniformeDeportivo = require("../shared/Respuestas/RespuestasUniformeDeportivo");
const RespuestasRotulos = require("../shared/Respuestas/RespuestasRotulos");
const RespuestasPromocionales = require("../shared/Respuestas/RespuestasPromocionales");
const RespuestasBanner = require("../shared/Respuestas/RespuestasBanner");
const RespuestasFiguras = require("../shared/Respuestas/RespuestasFiguras");

function Process(textUser, number){
    textUser = textUser.toLowerCase();
    var models = [];

    if (textUser.includes('hola') || textUser.includes('volver al menu')) {
        var model = whatsAppModel.MessageText("hola, un gusto saludarte, estas hablando con el asistente virtual de impregrafia", number);
        models.push(model);  // Se agrega primero a la lista
    
        var modelList = whatsAppModel.MessageList(number);
        models.push(modelList);  // Se agrega después a la lista
    }
    
    else if(textUser.includes('gracias')){
        var model = whatsAppModel.MessageText("Gracias a ti por escribirme", number);
        models.push(model);
    }
    else if(RespuestasMantaVinilicas.getAllMantasVinilicasKeywords().some(palabra => textUser.includes(palabra))){
        MantasVinilicasMessage.MantasVinilicasMessage(textUser, number);
        return; 
    }     
    else if(RespuestasSublimacion.getAllSublimacion().some(palabra => textUser.includes(palabra))){
        SublimacionMessage.SublimacionsMessage(textUser, number);
        return; 
    }     
    else if(RespuestasUniformeDeportivo.getAllUniformes().some(palabra => textUser.includes(palabra))){
        UniformeDeportivoMessage.UniformesDeportivosMessage(textUser, number);
        return; 
    }     
    else if(RespuestasRotulos.getAllRotulos().some(palabra => textUser.includes(palabra))){
        RotulosMessage.RotulosMessage(textUser, number);
        return; 
    }     
    else if(RespuestasPromocionales.getAllPromocionales().some(palabra => textUser.includes(palabra))){
        PromocionalesMessage.PromocionalesMessage(textUser, number);
        return; 
    }     
    else if(RespuestasBanner.getAllBannerKeywords().some(palabra => textUser.includes(palabra))){
        BannerMessage.BannerMessage(textUser, number);
        return; 
    }     
    else if(RespuestasFiguras.getAllFigurasKeywords().some(palabra => textUser.includes(palabra))){
        FigurasMessage.FigurasMessage(textUser, number);
        return; 
    }     


    else if (textUser.includes('sí, comprar')) {
        var model = whatsAppModel.MessageText("💳 Por favor selecciona una opción de pago:", number);
        models.push(model);
    
        var modelList = whatsAppModel.FormasDePagoList(number);  // Muestra las opciones de pago como botones
        models.push(modelList);
    }
    
    // Si elige una forma de pago
    else if (textUser.includes('paypal') || textUser.includes('banco')) {
        if (textUser.includes('paypal')) {
            var model = whatsAppModel.MessageText("📝 Información de la cuenta PayPal: paypal@impregrafia.com", number);
        } else {
            var model = whatsAppModel.MessageText("🏦 Información de la cuenta bancaria: Banco XYZ, Cuenta: 123456789", number);
        }
        models.push(model);

        // Solicita imágenes del diseño y comprobante de pago
        var modelPago = whatsAppModel.MessageText("🔄 Por favor, sube una imagen de tu diseño personalizado y una foto del comprobante de pago.", number);
        models.push(modelPago);
    }


    // else if(RespuestasCamisas.getAllCamisaKeywords().some(palabra => textUser.includes(palabra))){
    //     camisaMessage.ProcessCamisa(textUser, number);
    //     return; // Salimos de la función porque ProcessCamisa se encarga de enviar los mensajes
    // }     
    // else if (RespuestasPantalones.pantalones.some(palabra => textUser.includes(palabra))) {
    //     pantalonMessage.ProcessPantalon(textUser, number);
    //     return; // Salimos de la función porque ProcessPantalon se encarga de enviar los mensajes
    // } 
    // else if (RespuestasCalzado.calzado.some(palabra => textUser.includes(palabra))) {
    //     calzadoMessage.ProcessCalzado(textUser, number);
    //     return; // Salimos de la función porque ProcessCalzado se encarga de enviar los mensajes
    // }
    // else if (RespuestasAbrigos.getAllAbrigoKeywords().some(palabra => textUser.includes(palabra)))
    // {
    //     abrigoMessage.ProcessAbrigo(textUser, number);
    //     return; 
    // }     
    // else if (RespuestasGorros.gorros.some(palabra => textUser.includes(palabra))) {
    //     gorroMessage.ProcessGorro(textUser, number);
    //     return; // Salimos de la función porque ProcessGorro se encarga de enviar los mensajes
    // }
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