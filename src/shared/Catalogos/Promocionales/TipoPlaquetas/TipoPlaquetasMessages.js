const TipoPlaquetasModel = require("../../Promocionales/TipoPlaquetas/TipoPlaquetasModel");
const whatsAppService = require("../../../../services/whatsappService");

function TipoPlaquetas(textUser, number) {
    textUser = textUser.toLowerCase();
    var models = [];

    // Lista de opciones cuando el usuario quiere ver los tipos de plaquetas
    if (textUser.includes('📜 plaquetas')) {
        var modelList = TipoPlaquetasModel.TipoPlaquetasList(number);
        models.push(modelList);
        var responseMessage = "📜 Aquí tienes nuestra variedad de plaquetas. Selecciona la opción que te interesa.";
        var model = TipoPlaquetasModel.MessageText(responseMessage, number);
        models.push(model);
    }
    // Respuestas para cada tipo de plaqueta específica usando el título
    else if (textUser.includes('🔮 plaquetas de vidrio')) {
        var model = TipoPlaquetasModel.MessageText("🔮 Ha Seleccionado Plaquetas de Vidrio. Este tipo de plaqueta cuesta alrededor de 75 quetzales. ¿Desea comprar?", number);
        models.push(model);
    }
    else if (textUser.includes('🪵 plaquetas de madera')) {
        var model = TipoPlaquetasModel.MessageText("🪵 Ha Seleccionado Plaquetas de Madera (MDF). Este tipo de plaqueta cuesta alrededor de 65 quetzales. ¿Desea comprar?", number);
        models.push(model);
    }
    else {
        var model = TipoPlaquetasModel.MessageText("❓ Lo siento, no entendí tu selección. Por favor, elige una opción válida.", number);
        models.push(model);
    }

    // Enviar los mensajes construidos
    models.forEach(model => {
        whatsAppService.SendMessageWhatsApp(model);
    });
}

module.exports = {
    TipoPlaquetas
};
