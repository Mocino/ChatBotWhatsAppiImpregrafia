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

function MantasList(number) {
    const data = JSON.stringify({
        'messaging_product': 'whatsapp',
        'recipient_type': 'individual',
        'to': number,
        'type': 'interactive',
        'interactive': {
            'type': 'list',
            'body': {
                'text': 'Seleccione una dimensión de mantas vinílicas:'
            },
            'action': {
                'button': 'Ver dimensiones',
                'sections': [
                    {
                        'title': 'Dimensiones de Mantas',
                        'rows': [
                            {
                                'id': '100x200',
                                'title': '100x200 cm'
                            },
                            {
                                'id': '150x300',
                                'title': '150x300 cm'
                            },
                            {
                                'id': '200x400',
                                'title': '200x400 cm'
                            },
                            {
                                'id': '300x600',
                                'title': '300x600 cm'
                            }
                        ]
                    }
                ]
            }
        }
    });
    return data;
}

function MessageButtons(number) {
    const data = JSON.stringify({
        'messaging_product': 'whatsapp',
        'to': number,
        'type': 'interactive',
        'interactive': {
            'type': 'button',
            'body': {
                'text': 'Seleccione una opción:'
            },
            'action': {
                'buttons': [
                    {
                        'type': 'reply',
                        'reply': {
                            'title': 'Sí',
                            'id': 'comprar' // Este campo 'id' es el correcto para manejar la respuesta
                        }
                    },
                    {
                        'type': 'reply',
                        'reply': {
                            'title': 'Volver al menu',
                            'id': 'no_comprar'
                        }
                    },
                    {
                        'type': 'reply',
                        'reply': {
                            'title': 'Ver medidas otra vez', // Título más corto
                            'id': 'ver_medidas'
                        }
                    }
                ]
            }
        }
    });
    return data;
}


module.exports = {
    MessageText,
    MantasList,
    MessageButtons
};
