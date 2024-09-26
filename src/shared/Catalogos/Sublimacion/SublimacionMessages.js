const sublimacionModel = require("../Sublimacion/SublimacionModel");
const whatsAppService = require("../../../services/whatsappService");
const RespuestasSublimacion = require("../../Respuestas/RespuestasSublimacion");
// const DimensionesMantasVinilicas = require("../../Catalogos/MantasVinilicas/DimensionMantaVinilica/DimensionesMantaVinilicas"); 


function SublimacionsMessage(textUser, number) {
    textUser = textUser.toLowerCase();
    var models = [];

    if (textUser.includes('🖌️ sublimación')) {
        var modelList = sublimacionModel.SublimacionList(number);
        models.push(modelList);
        
        var model = sublimacionModel.MessageText("🖌️ Ha seleccionado sublimacion. ¿Qué te gustaría saber más?", number);
        models.push(model);
    }    
    else if (textUser.includes('👕⚪ playeras blancas')) {
        var model = sublimacionModel.MessageText("las camisas blancas tienen un valor de 65 quetzales", number);
        models.push(model);
        models.push(sublimacionModel.MessageButtons(number));
    }
    else if (textUser.includes('👕⚫ playeras negras')) {
        var model = sublimacionModel.MessageText("las camisas negras tienen un valor de 75 quetzales", number);
        models.push(model);
        models.push(sublimacionModel.MessageButtons(number));
        // // Enviar la respuesta de dimensiones después de la confirmación
        // var dimensionsModel = DimensionesMantasVinilicas.DimensionesMantasDetalle(textUser, number);
        // models.push(dimensionsModel);  // Asegúrate de que esta función devuelva un modelo
        // return; 
    } else if (textUser.includes('🏳️ banderas')) {
        var model = sublimacionModel.MessageText("🏳️ Las banderas tienen un costo de 30 quetzales", number);
        models.push(model);
        models.push(sublimacionModel.MessageButtons(number));
    }        
    else if (textUser.includes('🎽 bandas')) {
        var model = sublimacionModel.MessageText("🎽 las bandas tienen un costo de 40 quetzales", number);
        models.push(model);
        models.push(sublimacionModel.MessageButtons(number));
    }        
    else {
        var model = sublimacionModel.MessageText("❓ Por favor, seleccione una opción válida del menú de Manta vinilica.", number);
        models.push(model);
    }

    models.forEach(model => {
        whatsAppService.SendMessageWhatsApp(model);
    });
}

module.exports = {
    SublimacionsMessage
};
