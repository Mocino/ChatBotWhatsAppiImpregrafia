const mantasVinilicasModel = require("../MantasVinilicas/MantasVinilicasModel");
const whatsAppService = require("../../../services/whatsappService");

function MantasVinilicasMessage(textUser, number) {
    textUser = textUser.toLowerCase();
    var models = [];

    if (textUser.includes('🖼️ mantas vinílicas')) {
        var modelList = mantasVinilicasModel.MantasVinilicasList(number);
        models.push(modelList);
        
        var model = mantasVinilicasModel.MessageText("🖼️ Ha seleccionado mantas vinílicas. ¿Qué te gustaría saber más?", number);
        models.push(model);
    }    
    else if (textUser.includes('📏 tamaños mantas')) {
        var model = mantasVinilicasModel.MessageText("📏 Los tamaños de las mantas vinílicas varían según tus necesidades. ¿Te gustaría conocer las dimensiones disponibles?", number);
        models.push(model);
    }
    else if (textUser.includes('🎨 diseños mantas')) {
        var model = mantasVinilicasModel.MessageText("🎨 Ofrecemos una variedad de diseños y colores para tus mantas vinílicas. ¿Tienes algún diseño en mente?", number);
        models.push(model);
    }
    else if (textUser.includes('🔧 instalación mantas')) {
        var model = mantasVinilicasModel.MessageText("🔧 La instalación dependera del lugar. ¿quiere saber sobre los servicios?", number);
        models.push(model);
    }
    else if (textUser.includes('🖨️ impresión mantas')) {
        var model = mantasVinilicasModel.MessageText("🖨️ Contamos con varias opciones de impresión para tus mantas vinílicas. ¿Qué tipo de impresión prefieres?", number);
        models.push(model);
    }
    else {
        var model = mantasVinilicasModel.MessageText("❓ Por favor, seleccione una opción válida del menú de Camisas.", number);
        models.push(model);
    }

    models.forEach(model => {
        whatsAppService.SendMessageWhatsApp(model);
    });
}

module.exports = {
    MantasVinilicasMessage
};
