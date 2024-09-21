const DimensionMantaModel = require("../../MantasVinilicas/DimensionMantaVinilica/DimensionesMantaVinilicasModel");
const whatsAppService = require("../../../../services/whatsappService");

function DimensionesMantasDetalle(textUser, number) {
    textUser = textUser.toLowerCase();
    var models = [];

    if (textUser.includes('📏 tamaños mantas') || textUser.includes('ver medidas otra vez')) {
        var modelList = DimensionMantaModel.MantasList(number);
        models.push(modelList);

        var model = DimensionMantaModel.MessageText("📏 Ha seleccionado tamaños de mantas. ¿Qué te gustaría saber más? (Dimensiones disponibles)", number);
        models.push(model);
    } else if (textUser.includes('100x200')) {
        var model = DimensionMantaModel.MessageText("📏 Ha seleccionado el tamaño 100x200 cm. Este tamaño cuesta alrededor de 35 quetzales. ¿Desea comprar?", number);
        models.push(model);
        models.push(DimensionMantaModel.MessageButtons(number)); // Agregar botones
    } else if (textUser.includes('150x300')) {
        var model = DimensionMantaModel.MessageText("📏 Ha seleccionado el tamaño 150x300 cm. Este tamaño cuesta alrededor de 45 quetzales. ¿Desea comprar?", number);
        models.push(model);
        models.push(DimensionMantaModel.MessageButtons(number));
    } else if (textUser.includes('200x400')) {
        var model = DimensionMantaModel.MessageText("📏 Ha seleccionado el tamaño 200x400 cm. Este tamaño cuesta alrededor de 55 quetzales. ¿Desea comprar?", number);
        models.push(model);
        models.push(DimensionMantaModel.MessageButtons(number));
    } else if (textUser.includes('300x600')) {
        var model = DimensionMantaModel.MessageText("📏 Ha seleccionado el tamaño 300x600 cm. Este tamaño cuesta alrededor de 70 quetzales. ¿Desea comprar?", number);
        models.push(model);
        models.push(DimensionMantaModel.MessageButtons(number));
    } else {
        var model = DimensionMantaModel.MessageText("❓ No tenemos más detalles sobre ese tema en este momento.", number);
        models.push(model);
    }

    models.forEach(model => {
        whatsAppService.SendMessageWhatsApp(model);
    });
}

module.exports = {
    DimensionesMantasDetalle
};
