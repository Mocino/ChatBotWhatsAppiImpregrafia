const TiposTazasModel = require("../../Promocionales/TiposTazas/TipoTazasModel"); 
const whatsAppService = require("../../../../services/whatsappService");

function TiposTazas(textUser, number) {
    textUser = textUser.toLowerCase();
    var models = [];

    // Lista de opciones cuando el usuario quiere ver los tipos de tazas
    if (textUser.includes('☕ tazas')) {
        var modelList = TiposTazasModel.TiposTazasList(number);
        models.push(modelList);    
        var responseMessage = "☕ Aquí tienes nuestra variedad de tazas y más. Selecciona la opción que te interesa.";
        var model = TiposTazasModel.MessageText(responseMessage, number);
        models.push(model);
    }    
    // Respuestas para cada tipo de taza específica usando el título
    else if (textUser.includes('☕ taza común')) {
        var model = TiposTazasModel.MessageText("☕ Ha Seleccionado Taza Común. Este tipo de taza cuesta alrededor de 35 quetzales. ¿Desea comprar?", number);
        models.push(model);
    }
    else if (textUser.includes('🍺 tarros cerveceros')) {
        var model = TiposTazasModel.MessageText("🍺 Ha Seleccionado Tarros Cerveceros. Este tipo de tarro cuesta alrededor de 50 quetzales. ¿Desea comprar?", number);
        models.push(model);
    }
    else if (textUser.includes('🥤 pachones térmicos')) {
        var model = TiposTazasModel.MessageText("🥤 Ha Seleccionado Pachones Térmicos. Este tipo de pachón cuesta alrededor de 60 quetzales. ¿Desea comprar?", number);
        models.push(model);
    }
    else if (textUser.includes('🖤 tazas mágicas')) {
        var model = TiposTazasModel.MessageText("🖤 Ha Seleccionado Tazas Mágicas. Este tipo de taza cuesta alrededor de 45 quetzales. ¿Desea comprar?", number);
        models.push(model);
    }
    else if (textUser.includes('🌈 tazas de color')) {
        var model = TiposTazasModel.MessageText("🌈 Ha Seleccionado Tazas de Color. Este tipo de taza cuesta alrededor de 40 quetzales. ¿Desea comprar?", number);
        models.push(model);
    }
    else if (textUser.includes('🍶 tazas transparentes')) {
        var model = TiposTazasModel.MessageText("🍶 Ha Seleccionado Tazas Transparentes. Este tipo de taza cuesta alrededor de 55 quetzales. ¿Desea comprar?", number);
        models.push(model);
    }
    else {
        var model = TiposTazasModel.MessageText("❓ Lo siento, no entendí tu selección. Por favor, elige una opción válida.", number);
        models.push(model);
    }


    // Enviar los mensajes construidos
    models.forEach(model => {
        whatsAppService.SendMessageWhatsApp(model);
    });
}

module.exports = {
    TiposTazas
};
