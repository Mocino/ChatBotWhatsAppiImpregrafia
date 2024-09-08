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

function GorrosList(number) {
    const data = JSON.stringify({
        'messaging_product': 'whatsapp',
        'recipient_type': 'individual',
        'to': number,
        'type': 'interactive',
        'interactive': {
            'type': 'list',
            'body': {
                'text': 'Seleccione una opción para obtener más información sobre nuestros gorros:'
            },
            'action': {
                'button': 'Ver opciones',
                'sections': [
                    {
                        'title': 'Información de Gorros',
                        'rows': [
                            {
                                'id': 'colores',
                                'title': 'colores de gorra'
                            },
                            {
                                'id': 'disenos',
                                'title': 'diseños de gorra'
                            },
                            {
                                'id': 'materiales',
                                'title': 'materiales de gorra'
                            },
                            {
                                'id': 'precios',
                                'title': 'precios de gorra'
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
    GorrosList
};
