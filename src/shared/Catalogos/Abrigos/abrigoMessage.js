const abrigoModel = require("../Abrigos/abrigoModel");
const whatsAppService = require("../../../services/whatsappService");

function ProcessAbrigo(textUser, number) {
    textUser = textUser.toLowerCase();
    var models = [];

    if (textUser.includes('🧥 abrigos')) {
        var modelList = abrigoModel.AbrigosList(number);
        models.push(modelList);
        
        var model = abrigoModel.MessageText("🧥 Ha seleccionado Abrigos. ¿Qué te gustaría saber más?", number);
        models.push(model);
    }    
    else if (textUser.includes('colores')) {
        var model = abrigoModel.MessageText("🌈 Tenemos abrigos en colores: negro, gris, marrón, azul y verde.", number);
        models.push(model);
    }
    else if (textUser.includes('diseños')) {
        var model = abrigoModel.MessageText("🖼️ Ofrecemos diseños: lisos, con capucha, con cinturón y acolchados.", number);
        models.push(model);
    }
    else if (textUser.includes('materiales')) {
        var model = abrigoModel.MessageText("🔍 Nuestros abrigos están disponibles en: lana, poliéster, algodón y mezclas sintéticas.", number);
        models.push(model);
    }
    else if (textUser.includes('precios')) {
        var model = abrigoModel.MessageText("💵 Los precios varían desde $50 hasta $300 dependiendo del modelo y material.", number);
        models.push(model);
    }
    else {
        var model = abrigoModel.MessageText("❓ Por favor, seleccione una opción válida del menú de Abrigos.", number);
        models.push(model);
    }

    models.forEach(model => {
        whatsAppService.SendMessageWhatsApp(model);
    });
}

module.exports = {
    ProcessAbrigo
};
