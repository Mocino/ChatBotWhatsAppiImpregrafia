const promocionalesModel = require("../Promocionales/PromocionalesModel");
const whatsAppService = require("../../../services/whatsappService");

const RespuestaTazasPromocional = require("../../Respuestas/RespuestasPromocionales");

const TipoTazas = require("../../Catalogos/Promocionales/TiposTazas/TipoTazasMessage"); 
const TipoGorras = require("../../Catalogos/Promocionales/TipoGorras/TipoGorrasMessage"); 
const TipoPlaquetas = require("../../Catalogos/Promocionales/TipoPlaquetas/TipoPlaquetasMessages"); 

function PromocionalesMessage(textUser, number) {
    textUser = textUser.toLowerCase();
    var models = [];

    // Si el usuario selecciona "Promocionales"
    if (textUser.includes('🎁 promocionales') || textUser.includes('ver promos otra vez')) {
        var modelList = promocionalesModel.PromocionalesList(number);
        models.push(modelList);

        var model = promocionalesModel.MessageText("🎁 Ha seleccionado la categoría de Promocionales. Seleccione un producto para obtener más información.", number);
        models.push(model);
    }
    // Si el usuario selecciona "Tazas ☕"
    else if (RespuestaTazasPromocional.RespuestasTasas.some(keyword => textUser.includes(keyword))) {
        TipoTazas.TiposTazas(textUser, number);
        return; 
    }
    // Si el usuario selecciona "Platos decorativos"
    else if (textUser.includes('🍽️ platos decorativos')) {
        var model = promocionalesModel.MessageText("🍽️ Los platos decorativos personalizados son perfectos para ocasiones especiales y están disponibles desde 45 quetzales.", number);
        models.push(model);
        models.push(promocionalesModel.MessageButtons(number));
    }
    // Si el usuario selecciona "Plaquetas 📜"
    else if (RespuestaTazasPromocional.RespuestasPlaquetas.some(keyword => textUser.includes(keyword))) {
        TipoPlaquetas.TipoPlaquetas(textUser, number);
        return; 
    }
    // Si el usuario selecciona "Mouse pad"
    else if (textUser.includes('🖱️ mouse pad')) {
        var model = promocionalesModel.MessageText("🖱️ Ofrecemos mouse pad personalizados desde 20 quetzales, ideales para regalos corporativos.", number);
        models.push(model);
        models.push(promocionalesModel.MessageButtons(number));
    }
    // Si el usuario selecciona "Gorras"
    else if (RespuestaTazasPromocional.RespuestasGorras.some(keyword => textUser.includes(keyword))) {
        TipoGorras.TipoGorras(textUser, number);
        return; 
    }
    // Si el usuario selecciona "Gabachas"
    else if (textUser.includes('🧑‍🍳 gabachas')) {
        var model = promocionalesModel.MessageText("🧑‍🍳 Las gabachas personalizadas están disponibles desde 50 quetzales.", number);
        models.push(model);
        models.push(promocionalesModel.MessageButtons(number));
    }
    // Si el usuario selecciona "Almohadas"
    else if (textUser.includes('🛏️ almohadas')) {
        var model = promocionalesModel.MessageText("🛏️ Las almohadas personalizadas están disponibles desde 40 quetzales, con impresión a todo color.", number);
        models.push(model);
        models.push(promocionalesModel.MessageButtons(number));
    }
    // Si el texto no coincide con ninguna opción válida
    else {
        var model = promocionalesModel.MessageText("❓ Por favor, seleccione una opción válida del menú de promocionales.", number);
        models.push(model);
    }

    // Enviar los mensajes generados a WhatsApp
    models.forEach(model => {
        whatsAppService.SendMessageWhatsApp(model);
    });
}

module.exports = {
    PromocionalesMessage
};
