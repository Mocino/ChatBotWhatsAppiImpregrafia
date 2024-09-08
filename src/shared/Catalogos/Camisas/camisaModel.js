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

function CamisasList(number) {
    const data = JSON.stringify({
        'messaging_product': 'whatsapp',
        'recipient_type': 'individual',
        'to': number,
        'type': 'interactive',
        'interactive': {
            'type': 'list',
            'body': {
                'text': 'Seleccione una opción para obtener más información sobre nuestras camisas:'
            },
            'action': {
                'button': 'Ver opciones',
                'sections': [
                    {
                        'title': 'Información de Camisas',
                        'rows': [
                            {
                                'id': 'colores',
                                'title': 'colores de camisas'
                            },
                            {
                                'id': 'disenos',
                                'title': 'diseños de camisas'
                            },
                            {
                                'id': 'materiales',
                                'title': 'materiales de camisas'
                            },
                            {
                                'id': 'precios',
                                'title': 'precios de camisas'
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
    CamisasList
};