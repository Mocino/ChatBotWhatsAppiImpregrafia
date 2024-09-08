const calzadoModel = require("../Calzado/calzadoModel");
const whatsAppService = require("../../../services/whatsappService");

function ProcessCalzado(textUser, number) {
    textUser = textUser.toLowerCase();
    var models = [];

    if (textUser.includes('👟 calzado')) {
        var modelList = calzadoModel.CalzadoList(number);
        models.push(modelList);
        
        var model = calzadoModel.MessageText("👟 Ha seleccionado Calzado. ¿Qué te gustaría saber más?", number);
        models.push(model);
    }    
    else if (textUser.includes('colores de calzado')) {
        var model = calzadoModel.MessageText("🌈 Tenemos calzado en colores: negro, blanco, marrón y azul.", number);
        models.push(model);
    }
    else if (textUser.includes('diseños de calzado')) {
        var model = calzadoModel.MessageText("🖼️ Ofrecemos diseños: deportivos, formales, casuales y sandalias.", number);
        models.push(model);
    }
    else if (textUser.includes('materiales de calzado')) {
        var model = calzadoModel.MessageText("🔍 Nuestros calzados están disponibles en: cuero, lona, sintético y tela.", number);
        models.push(model);
    }
    else if (textUser.includes('precios de calzado')) {
        var model = calzadoModel.MessageText("💵 Los precios varían desde $40 hasta $200 dependiendo del modelo y material.", number);
        models.push(model);
    }
    else if (textUser.includes('ver modelos de calzado')) {
        // Enviar imágenes de los modelos
        var model1 = calzadoModel.SampleImage(number, 'https://img.ltwebstatic.com/images3_pi/2022/11/17/1668678073e2bcb9d7e9224370a4fdee3a1ab2950d_thumbnail_720x.jpg');
        var model2 = calzadoModel.SampleImage(number, 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Museo_del_Bicentenario_-_Zapatos_de_N%C3%A9stor_Kirchner.jpg/800px-Museo_del_Bicentenario_-_Zapatos_de_N%C3%A9stor_Kirchner.jpg');
        models.push(model1);
        models.push(model2);
    }
    else {
        var model = calzadoModel.MessageText("❓ Por favor, seleccione una opción válida del menú de Calzado.", number);
        models.push(model);
    }

    models.forEach(model => {
        whatsAppService.SendMessageWhatsApp(model);
    });
}

module.exports = {
    ProcessCalzado
};
