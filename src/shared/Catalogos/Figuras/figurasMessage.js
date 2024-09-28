const promocionalesModel = require("../Figuras/figurasModel");
const whatsAppService = require("../../../services/whatsappService");


function FigurasMessage(textUser, number) {
    textUser = textUser.toLowerCase();
    let models = [];

    if (textUser.includes('🪆 figuras de pvc') || textUser.includes('ver figuras otra vez')) {
        const modelList = promocionalesModel.FigurasList(number);
        models.push(modelList);  // Mensaje de opciones

        var model = promocionalesModel.MessageText("🪆 Ha seleccionado la categoría de figuras de pvc. Seleccione un producto para obtener más información.", number);
        models.push(model);
    }
    else if (textUser.includes('🎭 figuras con relieve')) {
        const model = promocionalesModel.MessageText("🎭 Las figuras con relieve están disponibles en varias opciones. Contáctanos para más detalles.", number);
        models.push(model);

        const imageModels = promocionalesModel.SampleImage(number);
        models = models.concat(imageModels);

        models.push(promocionalesModel.MessageButtons(number));
    } 
    else if (textUser.includes('🖼️ cuadros pvc')) {
        const model = promocionalesModel.MessageText("🖼️ Los cuadros PVC están disponibles en distintos tamaños y diseños. Pregunta por nuestras opciones.", number);
        models.push(model);
        models.push(promocionalesModel.MessageButtons(number));
    } else {
        const model = promocionalesModel.MessageText("❓ Por favor, selecciona una opción válida de la categoría Figuras de PVC.", number);
        models.push(model);
    }

    models.forEach(model => {
        whatsAppService.SendMessageWhatsApp(model);
    })
}

module.exports = {
    FigurasMessage
};
