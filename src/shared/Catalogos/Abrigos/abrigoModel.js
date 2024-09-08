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

function AbrigosColoresList(number) {
    const data = JSON.stringify({
        'messaging_product': 'whatsapp',
        'recipient_type': 'individual',
        'to': number,
        'type': 'interactive',
        'interactive': {
            'type': 'list',
            'body': {
                'text': 'Seleccione un color específico para obtener más información:'
            },
            'action': {
                'button': 'Ver colores',
                'sections': [
                    {
                        'title': 'Colores de Abrigos',
                        'rows': [
                            {
                                'id': 'negro',
                                'title': 'abrigo negro'
                            },
                            {
                                'id': 'gris',
                                'title': 'abrigo gris'
                            },
                            {
                                'id': 'marrón',
                                'title': 'abrigo marrón'
                            }
                        ]
                    }
                ]
            }
        }
    });
    return data;
}


function AbrigosList(number) {
    const data = JSON.stringify({
        'messaging_product': 'whatsapp',
        'recipient_type': 'individual',
        'to': number,
        'type': 'interactive',
        'interactive': {
            'type': 'list',
            'body': {
                'text': 'Seleccione una opción para obtener más información sobre nuestros abrigos:'
            },
            'action': {
                'button': 'Ver opciones',
                'sections': [
                    {
                        'title': 'Información de Abrigos',
                        'rows': [
                            {
                                'id': 'colores',
                                'title': 'colores de abrigos'
                            },
                            {
                                'id': 'disenos',
                                'title': 'diseños de abrigos'
                            },
                            {
                                'id': 'materiales',
                                'title': 'materiales de abrigos'
                            },
                            {
                                'id': 'precios',
                                'title': 'precios de abrigos'
                            }
                        ]
                    }
                ]
            }
        }
    });
    return data;
}

module.exports = {
    MessageText,
    AbrigosList,
    AbrigosColoresList
};
