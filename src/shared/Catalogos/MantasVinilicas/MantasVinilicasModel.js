function MantasVinilicasList(number) {
    const data = JSON.stringify({
        'messaging_product': 'whatsapp',
        'recipient_type': 'individual',
        'to': number,
        'type': 'interactive',
        'interactive': {
            'type': 'list',
            'body': {
                'text': 'Seleccione una opción para obtener más información sobre nuestras mantas vinílicas:'
            },
            'action': {
                'button': 'Ver opciones',
                'sections': [
                    {
                        'title': 'Mantas Vinílicas',  // Título acortado
                        'rows': [
                            {
                                'id': 'tamanos',
                                'title': '📏 tamaños mantas'  // Título acortado
                            },
                            {
                                'id': 'disenos',
                                'title': '🎨 Diseños mantas'  // Título acortado
                            },
                            {
                                'id': 'instalacion',
                                'title': '🔧 Instalación mantas'  // Título acortado
                            },
                            {
                                'id': 'impresion',
                                'title': '🖨️ Impresión mantas'  // Título acortado
                            }
                        ]
                    }
                ]
            }
        }
    });
    return data;
}

function MessageText(text, number) {
    const data = JSON.stringify({
        'messaging_product': 'whatsapp',
        'recipient_type': 'individual',
        'to': number,
        'type': 'text',
        'text': {
            'body': text
        }
    });
    return data;
}

module.exports = {
    MantasVinilicasList,
    MessageText
};
