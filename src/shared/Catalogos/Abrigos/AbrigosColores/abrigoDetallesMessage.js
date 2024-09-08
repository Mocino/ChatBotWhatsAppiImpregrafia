const abrigoModel = require("../../Abrigos/abrigoModel");
const whatsAppService = require("../../../../services/whatsappService");

function ProcessAbrigoDetalles(textUser, number) {
    textUser = textUser.toLowerCase();
    var models = [];

    if (textUser.includes('abrigo negro')) {
        var model = abrigoModel.MessageText("🧥 El abrigo negro está hecho de lana de alta calidad y cuesta $200.", number);
        models.push(model);
    }
    else if (textUser.includes('abrigo gris')) {
        var model = abrigoModel.MessageText("🧥 El abrigo gris está hecho de mezcla de poliéster y cuesta $180.", number);
        models.push(model);
    }
    else if (textUser.includes('abrigo marrón')) {
        var model = abrigoModel.MessageText("🧥 El abrigo marrón está hecho de algodón y cuesta $150.", number);
        models.push(model);
    }
    else {
        var model = abrigoModel.MessageText("❓ No tenemos más detalles sobre ese abrigo en este momento.", number);
        models.push(model);
    }

    models.forEach(model => {
        whatsAppService.SendMessageWhatsApp(model);
    });
}

module.exports = {
    ProcessAbrigoDetalles
};
