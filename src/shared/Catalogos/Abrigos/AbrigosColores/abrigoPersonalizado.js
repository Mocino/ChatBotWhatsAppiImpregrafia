const whatsAppService = require("../../../../services/whatsappService");
const abrigoModel = require("../../Abrigos/abrigoModel");

function ProcessAbrigoPersonalizado(textUser, number) {
    textUser = textUser.toLowerCase();
    var models = [];

    // Si elige la opción de abrigos personalizados
    if (textUser.includes('abrigo personalizados')) {
        var modelList = abrigoModel.AbrigosPersonalizadosList(number);
        models.push(modelList);

        var model = abrigoModel.MessageText("🧥 Ha seleccionado Abrigos Personalizados. ¿Qué te gustaría hacer? (Ver precios, Formas de pagos)", number);
        models.push(model);
    }
    // Si elige ver precios
    else if (textUser.includes('precio de abrigos')) {
        var model = abrigoModel.MessageText("💵 Los precios de los abrigos personalizados empiezan desde $100 y varían según los detalles.", number);
        models.push(model);

        // Pregunta si le gustaría comprar
        var modelCompra = abrigoModel.MessageQuestion(
            "Te gustaría comprar este abrigo personalizado?",
            number,
            ['sí', 'no']  // Botones "Sí" y "No"
        );
        models.push(modelCompra);
    }
    // Si elige "Sí" para comprar
    else if (textUser.includes('sí')) {
        var model = abrigoModel.MessageText("💳 Por favor selecciona una opción de pago: PayPal o Banco.", number);
        models.push(model);

        var modelList = abrigoModel.FormasDePagoList(number);  // Muestra las opciones de pago
        models.push(modelList);
    }
    // Si elige una forma de pago
    else if (textUser.includes('paypal') || textUser.includes('banco')) {
        if (textUser.includes('paypal')) {
            var model = abrigoModel.MessageText("📝 Información de la cuenta PayPal: paypal@impregrafia.com", number);
        } else {
            var model = abrigoModel.MessageText("🏦 Información de la cuenta bancaria: Banco XYZ, Cuenta: 123456789", number);
        }
        models.push(model);

        // Solicita imágenes del diseño y comprobante de pago
        var modelPago = abrigoModel.MessageText("🔄 Por favor, sube una imagen de tu diseño personalizado y una foto del comprobante de pago.", number);
        models.push(modelPago);
    }
    // Si elige "No"
    else if (textUser.includes('no')) {
        var model = abrigoModel.MessageText("👌 Entendido, si cambias de opinión no dudes en contactarnos.", number);
        models.push(model);
    }
    // En caso de una opción no válida
    else {
        var model = abrigoModel.MessageText("❓ Por favor selecciona una opción válida para abrigos personalizados.", number);
        models.push(model);
    }

    // Envía los mensajes
    models.forEach(model => {
        whatsAppService.SendMessageWhatsApp(model);
    });
}

module.exports = {
    ProcessAbrigoPersonalizado
};
