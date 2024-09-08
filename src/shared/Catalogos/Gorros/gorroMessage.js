const gorroModel = require("../Gorros/gorroModel");
const whatsAppService = require("../../../services/whatsappService");

function ProcessGorro(textUser, number) {
    textUser = textUser.toLowerCase();
    var models = [];

    if (textUser.includes('🧢 gorros')) {
        var modelList = gorroModel.GorrosList(number);
        models.push(modelList);
        
        var model = gorroModel.MessageText("🧢 Ha seleccionado Gorro. ¿Qué te gustaría saber más?", number);
        models.push(model);
    }    
    else if (textUser.includes('colores')) {
        var model = gorroModel.MessageText("🌈 Tenemos gorros en colores: negro, azul, rojo, verde y beige.", number);
        models.push(model);
    }
    else if (textUser.includes('diseños')) {
        var model = gorroModel.MessageText("🖼️ Ofrecemos diseños: lisos, a rayas, con logotipo y bordados.", number);
        models.push(model);
    }
    else if (textUser.includes('materiales')) {
        var model = gorroModel.MessageText("🔍 Nuestros gorros están disponibles en: lana, acrílico, algodón y mezclas sintéticas.", number);
        models.push(model);
    }
    else if (textUser.includes('precios')) {
        var model = gorroModel.MessageText("💵 Los precios varían desde $10 hasta $50 dependiendo del modelo y material.", number);
        models.push(model);
    }
    else {
        var model = gorroModel.MessageText("❓ Por favor, seleccione una opción válida del menú de Gorro.", number);
        models.push(model);
    }

    models.forEach(model => {
        whatsAppService.SendMessageWhatsApp(model);
    });
}

module.exports = {
    ProcessGorro
};
