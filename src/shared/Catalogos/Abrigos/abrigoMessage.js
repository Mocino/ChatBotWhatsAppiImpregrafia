const abrigoModel = require("../Abrigos/abrigoModel");
const whatsAppService = require("../../../services/whatsappService");
const abrigoDetallesMessage = require("../../Catalogos/Abrigos/AbrigosColores/abrigoDetallesMessage"); 
const abrigoPersonalizadoMessage = require("../../Catalogos/Abrigos/AbrigosColores/abrigoPersonalizado"); 
const RespuestasAbrigos = require("../../../shared/Respuestas/RespuestasAbrigos");


function ProcessAbrigo(textUser, number) {
    textUser = textUser.toLowerCase();
    var models = [];

    if (textUser.includes('🧥 abrigos')) {
        var modelList = abrigoModel.AbrigosList(number);
        models.push(modelList);

        var model = abrigoModel.MessageText("🧥 Ha seleccionado Abrigos. ¿Qué te gustaría saber más? (Colores, Diseños, Materiales, Precios)", number);
        models.push(model);
    }
    // Concatenar el producto con las consultas
    else if (textUser.includes('colores de abrigos')) {
        var model = abrigoModel.MessageText("🌈 Tenemos abrigos en colores: negro, gris, marrón, azul y verde.", number);
        models.push(model);

        // Detalle de colores (nivel más profundo)
        var modelList = abrigoModel.AbrigosColoresList(number);
        models.push(modelList);
    }
    else if (textUser.includes('diseños de abrigos')) {
        var model = abrigoModel.MessageText("🖼️ Ofrecemos abrigos con diseños: lisos, con capucha, con cinturón y acolchados.", number);
        models.push(model);
    }
    else if (textUser.includes('materiales de abrigos')) {
        var model = abrigoModel.MessageText("🔍 Nuestros abrigos están disponibles en: lana, poliéster, algodón y mezclas sintéticas.", number);
        models.push(model);
    }
    else if (textUser.includes('precios de abrigos')) {
        var model = abrigoModel.MessageText("💵 Los precios de los abrigos varían desde $50 hasta $300 dependiendo del modelo y material.", number);
        models.push(model);
    }
    // Detalle específico de colores
    else if (textUser.includes('abrigo negro') || textUser.includes('abrigo gris') || textUser.includes('abrigo marrón')) {
        abrigoDetallesMessage.ProcessAbrigoDetalles(textUser, number);
        return;
    }
    else if (RespuestasAbrigos.abrigosThirddottwo.some(keyword => textUser.includes(keyword))) {
        abrigoPersonalizadoMessage.ProcessAbrigoPersonalizado(textUser, number);
        return; // Salimos de la función porque ProcessAbrigoPersonalizado se encarga de enviar los mensajes
    }
    else {
        var model = abrigoModel.MessageText("❓ Por favor, selecciona una opción válida sobre abrigos (Colores, Diseños, Materiales, Precios).", number);
        models.push(model);
    }

    models.forEach(model => {
        whatsAppService.SendMessageWhatsApp(model);
    });
}

module.exports = {
    ProcessAbrigo
};
