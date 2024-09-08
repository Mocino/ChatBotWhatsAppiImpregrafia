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
    AbrigosList
};
