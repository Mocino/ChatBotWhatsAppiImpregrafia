const TipoGorrasModel = require("../../Promocionales/TipoGorras/TipoGorrasModel");
const whatsAppService = require("../../../../services/whatsappService");

function TipoGorras(textUser, number) {
    textUser = textUser.toLowerCase();
    var models = [];

    // Lista de opciones cuando el usuario selecciona "🧢 gorras"
    if (textUser.includes('🧢 gorras')) {
        var modelList = TipoGorrasModel.TiposGorrasList(number);
        models.push(modelList);

        var responseMessage = "🧢 Aquí tienes nuestra variedad de gorras. Selecciona la opción que te interesa.";
        var model = TipoGorrasModel.MessageText(responseMessage, number);
        models.push(model);
    }
    // Respuesta para "gorras de poliéster"
    else if (textUser.includes('🧢🟠 gorras de poliéster')) {
        var model = TipoGorrasModel.MessageText("🧢🟠 Ha seleccionado Gorras de Poliéster. Estas gorras tienen un precio aproximado de 30 quetzales. ¿Desea comprar?", number);
        models.push(model);
        models.push(TipoGorrasModel.MessageButtons(number));
    }
    // Respuesta para "gorras de gabardina"
    else if (textUser.includes('🧢🟦 gorras de gabardina')) {
        var model = TipoGorrasModel.MessageText("🧢🟦 Ha seleccionado Gorras de Gabardina. Estas gorras tienen un precio aproximado de 35 quetzales. ¿Desea comprar?", number);
        models.push(model);
        models.push(TipoGorrasModel.MessageButtons(number));
    }
    else {
        var model = TipoGorrasModel.MessageText("❓ Lo siento, no entendí tu selección. Por favor, elige una opción válida.", number);
        models.push(model);
    }

    // Enviar los mensajes generados
    models.forEach(model => {
        whatsAppService.SendMessageWhatsApp(model);
    });
}

module.exports = {
    TipoGorras
};
