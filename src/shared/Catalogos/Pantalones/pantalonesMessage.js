const pantalonModel = require("../Pantalones/pantalonModel");
const whatsAppService = require("../../../services/whatsappService");


function ProcessPantalon(textUser, number) {
    textUser = textUser.toLowerCase();
    var models = [];

    if (textUser.includes('👖 pantalones')) {
        var modelList = pantalonModel.PantalonesList(number);
        models.push(modelList);
        
        var model = pantalonModel.MessageText("👖 Ha seleccionado Pantalones. ¿Qué te gustaría saber más?", number);
        models.push(model);
    }    
    else if (textUser.includes('colores')) {
        var model = pantalonModel.MessageText("🌈 Tenemos pantalones en colores: negro, azul, gris y beige.", number);
        models.push(model);
    }
    else if (textUser.includes('diseños')) {
        var model = pantalonModel.MessageText("🖼️ Ofrecemos diseños: lisos, a cuadros y de mezclilla.", number);
        models.push(model);
    }
    else if (textUser.includes('materiales')) {
        var model = pantalonModel.MessageText("🔍 Nuestros pantalones están disponibles en: algodón, poliéster, mezclilla y lino.", number);
        models.push(model);
    }
    else if (textUser.includes('precios')) {
        var model = pantalonModel.MessageText("💵 Los precios varían desde $30 hasta $120 dependiendo del modelo y material.", number);
        models.push(model);
    }
    else {
        var model = pantalonModel.MessageText("❓ Por favor, seleccione una opción válida del menú de Pantalones.", number);
        models.push(model);
    }

    models.forEach(model => {
        whatsAppService.SendMessageWhatsApp(model);
    });
}

module.exports = {
    ProcessPantalon
};
