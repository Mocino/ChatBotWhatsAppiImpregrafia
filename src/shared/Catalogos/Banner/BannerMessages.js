
const bannerModel = require("../Banner/BannerModel");
const whatsAppService = require("../../../services/whatsappService");

function BannerMessage(textUser, number) {
    textUser = textUser.toLowerCase();
    var models = [];

    // Si el usuario selecciona "Banners publicitarios"
    if (textUser.includes('🖼️ banners publicitarios')) {
        var modelList = bannerModel.BannerList(number);
        models.push(modelList);

        var model = bannerModel.MessageText("🖼️ Ha seleccionado la categoría de Banners publicitarios. Seleccione un tipo de banner para obtener más información.", number);
        models.push(model);
    }
    // Si el usuario selecciona "ROLL up"
    else if (textUser.includes('📏 roll up 2x80 cm')) {
        var model = bannerModel.MessageText("📏 El ROLL up de 2x80 cm está disponible desde 150 quetzales.", number);
        models.push(model);
    }
    // Si el usuario selecciona "Banner X"
    else if (textUser.includes('🕸️ banner 1.80x80 cm')) {
        var model = bannerModel.MessageText("🕸️ El Banner X de 1.80x80 cm está disponible desde 120 quetzales.", number);
        models.push(model);
    }
    // Si el usuario selecciona "Mini banner X"
    else if (textUser.includes('🕷️ minibanner 22x44 cm')) {
        var model = bannerModel.MessageText("🕷️ El Mini Banner X de 22x44 cm está disponible desde 80 quetzales.", number);
        models.push(model);
    }
    // Si el usuario selecciona "Mini ROLL up"
    else if (textUser.includes('📐 mini roll up')) {
        var model = bannerModel.MessageText("📐 El Mini ROLL up está disponible desde 100 quetzales.", number);
        models.push(model);
    }
    // Si el usuario selecciona "Banderola tipo gota"
    else if (textUser.includes('💧 banderola tipo gota')) {
        var model = bannerModel.MessageText("💧 La Banderola tipo gota está disponible desde 200 quetzales.", number);
        models.push(model);
    }
    // Si el texto no coincide con ninguna opción válida
    else {
        var model = bannerModel.MessageText("❓ Por favor, seleccione una opción válida del menú de Banners publicitarios.", number);
        models.push(model);
    }

    // Enviar los mensajes generados a WhatsApp
    models.forEach(model => {
        whatsAppService.SendMessageWhatsApp(model);
    });
}

module.exports = {
    BannerMessage
};
