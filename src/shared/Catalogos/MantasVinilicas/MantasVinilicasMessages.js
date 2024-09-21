const mantasVinilicasModel = require("../MantasVinilicas/MantasVinilicasModel");
const whatsAppService = require("../../../services/whatsappService");
const RespuestasMantaVinilicas = require("../../Respuestas/RespuestasMantasVinilicas");

const DimensionesMantasVinilicas = require("../../Catalogos/MantasVinilicas/DimensionMantaVinilica/DimensionesMantaVinilicas"); 


function MantasVinilicasMessage(textUser, number) {
    textUser = textUser.toLowerCase();
    var models = [];

    if (textUser.includes('🖼️ mantas vinílicas')) {
        var modelList = mantasVinilicasModel.MantasVinilicasList(number);
        models.push(modelList);
        
        var model = mantasVinilicasModel.MessageText("🖼️ Ha seleccionado mantas vinílicas. ¿Qué te gustaría saber más?", number);
        models.push(model);
    }    
    else if (RespuestasMantaVinilicas.RespuestaTamaniosMantaVinilica.some(keyword => textUser.includes(keyword))) {
        DimensionesMantasVinilicas.DimensionesMantasDetalle(textUser, number);
        return; 
    }
    else if (textUser.includes('🎨 diseños mantas')) {
        // Envía las opciones de diseño como botones
        var modelList = mantasVinilicasModel.DiseñoOpcionesBotones(number);
        models.push(modelList);
    
        var model = mantasVinilicasModel.MessageText("🎨 Ofrecemos una variedad de diseños y colores para tus mantas vinílicas. ¿Tienes algún diseño en mente?", number);
        models.push(model);
    }
    else if (textUser.includes('✅ sí, tengo diseño')) {
        var model = mantasVinilicasModel.MessageText("Genial, por favor compártenos tu diseño, después de contestar:", number);
        models.push(model);
    
        // Enviar la respuesta de dimensiones después de la confirmación
        var dimensionsModel = DimensionesMantasVinilicas.DimensionesMantasDetalle(textUser, number);
        models.push(dimensionsModel);  // Asegúrate de que esta función devuelva un modelo
        return; 
    } else if (textUser === '❌ no, tengo diseño') {
        var model = mantasVinilicasModel.MessageText("🎨 Nuestro servicio de diseños cuesta 70 quetzales", number);
        models.push(model);
    }        
    else {
        var model = mantasVinilicasModel.MessageText("❓ Por favor, seleccione una opción válida del menú de Manta vinilica.", number);
        models.push(model);
    }

    models.forEach(model => {
        whatsAppService.SendMessageWhatsApp(model);
    });
}

module.exports = {
    MantasVinilicasMessage
};
