function MessageText(textResponse, number) {
    const data = JSON.stringify({
        'messaging_product': 'whatsapp',
        'to': number,
        'text': {
            'body': textResponse
        },
        'type': 'text'
    });
    return data;
}

function CalzadoList(number) {
    const data = JSON.stringify({
        'messaging_product': 'whatsapp',
        'recipient_type': 'individual',
        'to': number,
        'type': 'interactive',
        'interactive': {
            'type': 'list',
            'body': {
                'text': 'Seleccione una opción para obtener más información sobre nuestro calzado:'
            },
            'action': {
                'button': 'Ver opciones',
                'sections': [
                    {
                        'title': 'Información de Calzado',
                        'rows': [
                            {
                                'id': 'colores',
                                'title': '🎨 Colores'
                            },
                            {
                                'id': 'disenos',
                                'title': '✏️ Diseños'
                            },
                            {
                                'id': 'materiales',
                                'title': '🧵 Materiales'
                            },
                            {
                                'id': 'precios',
                                'title': '💰 Precios'
                            },
                            {
                                'id': 'ver_modelos',
                                'title': '👟 Ver Modelos'
                            }
                        ]
                    }
                ]
            }
        }
    });
    return data;
}

function SampleImage(number, imageUrl) {
    const data = JSON.stringify({
        'messaging_product': 'whatsapp',
        'to': number,
        'type': 'image',
        'image': {
            'link': imageUrl
        },
    });
    return data;
}

module.exports = {
    MessageText,
    CalzadoList,
    SampleImage
};
