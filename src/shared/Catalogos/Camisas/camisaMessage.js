const camisasModel = require("../Camisas/camisaModel");
const whatsAppService = require("../../../services/whatsappService");

function ProcessCamisa(textUser, number) {
    textUser = textUser.toLowerCase();
    var models = [];

    if (textUser.includes('👕 camisas')) {
        var modelList = camisasModel.CamisasList(number);
        models.push(modelList);
        
        var model = camisasModel.MessageText("👕 Ha seleccionado Camisas. ¿Qué te gustaría saber más?", number);
        models.push(model);
    }    
    else if (textUser.includes('colores de camisas')) {
        var model = camisasModel.MessageText("🌈 Tenemos camisas en colores: blanco, negro, azul, rojo y verde.", number);
        models.push(model);
    }
    else if (textUser.includes('diseños de camisas')) {
        var model = camisasModel.MessageText("🖼️ Ofrecemos diseños: lisos, estampados, a cuadros y rayas.", number);
        models.push(model);
    }
    else if (textUser.includes('materiales de camisas')) {
        var model = camisasModel.MessageText("🔍 Nuestras camisas están disponibles en: algodón, poliéster, lino y mezclas.", number);
        models.push(model);
    }
    else if (textUser.includes('precios de camisas')) {
        var model = camisasModel.MessageText("💵 Los precios varían desde $20 hasta $100 dependiendo del modelo y material.", number);
        models.push(model);
    }
    else {
        var model = camisasModel.MessageText("❓ Por favor, seleccione una opción válida del menú de Camisas.", number);
        models.push(model);
    }

    models.forEach(model => {
        whatsAppService.SendMessageWhatsApp(model);
    });
}

module.exports = {
    ProcessCamisa
};
