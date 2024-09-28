const rotulosModel = require("../Rotulos/RotulosModel");
const whatsAppService = require("../../../services/whatsappService");

function RotulosMessage(textUser, number) {
    textUser = textUser.toLowerCase();
    var models = [];

    // Si el usuario selecciona "Rótulos con luz"
    if (textUser.includes('💡 rótulos con luz')) {
        var modelList = rotulosModel.RotulosConLuzList(number);
        models.push(modelList);

        var model = rotulosModel.MessageText("💡 Ha seleccionado rótulos con luz. Ofrecemos opciones de letras tipo block y logos iluminados.", number);
        models.push(model);
    } 
    // Si el usuario selecciona "Letras tipo block"
    else if (textUser.includes('🔠 letras tipo block')) {
        var model = rotulosModel.MessageText("🔠 Las letras tipo block con luz tienen un costo de 500 quetzales por metro cuadrado.", number);
        models.push(model);
        models.push(rotulosModel.MessageButtons(number));
    } 
    // Si el usuario selecciona "Logos"
    else if (textUser.includes('🔰 logos')) {
        var model = rotulosModel.MessageText("🔰 Los logos iluminados tienen un costo de 750 quetzales, dependiendo del tamaño y los materiales.", number);
        models.push(model);
        models.push(rotulosModel.MessageButtons(number));
    } 
    // Si el texto no coincide con ninguna opción válida
    else {
        var model = rotulosModel.MessageText("❓ Por favor, seleccione una opción válida del menú de rótulos con luz.", number);
        models.push(model);
    }

    // Enviar los mensajes generados a WhatsApp
    models.forEach(model => {
        whatsAppService.SendMessageWhatsApp(model);
    });
}

module.exports = {
    RotulosMessage
};
