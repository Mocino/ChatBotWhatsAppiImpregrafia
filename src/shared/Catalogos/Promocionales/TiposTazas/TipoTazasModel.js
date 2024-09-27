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
                            'title': 'Sí, comprar',
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

function TiposTazasList(number) {
    const data = JSON.stringify({
        'messaging_product': 'whatsapp',
        'recipient_type': 'individual',
        'to': number,
        'type': 'interactive',
        'interactive': {
            'type': 'list',
            'body': {
                'text': 'Seleccione que desea saber de nuestra variedad de diseños para tazas, pachones, etc...:'
            },
            'action': {
                'button': 'Tipo de Tazas',
                'sections': [
                    {
                        'title': 'Tipo de Tazas',
                        'rows': [
                            {
                                'id': 'tazasnormales',
                                'title': '☕ Taza Común'
                            },
                            {
                                'id': 'tarroscerveceros',
                                'title': '🍺 tarros cerveceros'
                            },
                            {
                                'id': 'pachonestérmicos',
                                'title': '🥤 pachones térmicos'
                            },
                            {
                                'id': 'tazasmagicas',
                                'title': '🖤 tazas mágicas'
                            },
                            {
                                'id': 'tazasColor',
                                'title': '🌈 tazas de color'
                            },
                            {
                                'id': 'tazastransparentes',
                                'title': '🍶 tazas transparentes'
                            },
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
    TiposTazasList,
    MessageButtons
};
