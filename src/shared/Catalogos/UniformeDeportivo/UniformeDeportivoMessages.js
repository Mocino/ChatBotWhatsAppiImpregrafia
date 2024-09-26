const sublimacionModel = require("../UniformeDeportivo/UniformeDeportivoModel");
const whatsAppService = require("../../../services/whatsappService");

function UniformesDeportivosMessage(textUser, number) {
    textUser = textUser.toLowerCase();
    var models = [];

    if (textUser.includes('🏃‍♂️ uniformes deportivos')) {
        var modelList = sublimacionModel.UniformesList(number);
        models.push(modelList);
        
        var model = sublimacionModel.MessageText("🏃‍♂️ Ha seleccionado uniformes deportivos. ¿Qué te gustaría saber más?", number);
        models.push(model);
    }    
    else if (textUser.includes('👕 manga larga')) {
        var model = sublimacionModel.MessageText("Las camisetas de manga larga tienen un valor de 80 quetzales.", number);
        models.push(model);
        models.push(sublimacionModel.MessageButtons(number));
    }
    else if (textUser.includes('👕 manga corta')) {
        var model = sublimacionModel.MessageText("Las camisetas de manga corta tienen un valor de 70 quetzales.", number);
        models.push(model);
        models.push(sublimacionModel.MessageButtons(number));
    }
    else if (textUser.includes('🧑‍🤝‍🧑 adultos')) {
        var model = sublimacionModel.MessageText("Los uniformes full sublimación para adultos tienen un costo de 150 quetzales.", number);
        models.push(model);
        models.push(sublimacionModel.MessageButtons(number));
    }
    else if (textUser.includes('👶 niños')) {
        var model = sublimacionModel.MessageText("Los uniformes full sublimación para niños tienen un costo de 120 quetzales.", number);
        models.push(model);
        models.push(sublimacionModel.MessageButtons(number));
    }
    else if (textUser.includes('🩳 pantaloneta')) {
        var model = sublimacionModel.MessageText("Las pantalonetas tienen un costo de 50 quetzales.", number);
        models.push(model);
        models.push(sublimacionModel.MessageButtons(number));
    }
    else if (textUser.includes('👕 camisola')) {
        var model = sublimacionModel.MessageText("Las camisolas tienen un costo de 55 quetzales.", number);
        models.push(model);
        models.push(sublimacionModel.MessageButtons(number));
    }
    else {
        var model = sublimacionModel.MessageText("❓ Por favor, seleccione una opción válida del menú de uniformes deportivos.", number);
        models.push(model);
    }

    models.forEach(model => {
        whatsAppService.SendMessageWhatsApp(model);
    });
}

module.exports = {
    UniformesDeportivosMessage
};
