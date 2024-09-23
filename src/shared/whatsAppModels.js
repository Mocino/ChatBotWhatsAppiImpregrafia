function MessageText(textResponse, number){
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

function MessageList(number) {
    const data = JSON.stringify({
        'messaging_product': 'whatsapp',
        'recipient_type': 'individual',
        'to': number,
        'type': 'interactive',
        'interactive': {
            'type': 'list',
            'body': {
                'text': 'Selecciona una opción:'
            },
            'action': {
                'button': 'Elige una opción',
                'sections': [
                    {
                        'title': 'Opciones',
                        'rows': [
                            {
                                'id': '0001',
                                'title': '🖼️ Mantas vinílicas'
                            },
                            {
                                'id': '0002',
                                'title': '🖌️ Sublimación'
                            },
                            {
                                'id': '0003',
                                'title': '🏃‍♂️ Uniformes deportivos'
                            },
                            {
                                'id': '0004',
                                'title': '💡 Rótulos con luz'
                            },
                            {
                                'id': '0005',
                                'title': '🎁 promocionales'
                            },
                            {
                                'id': '0006',
                                'title': '🖼️ banners publicitarios'
                            },
                        ]
                    }
                ]
            }
        }
    });
    return data;
}

function FormasDePagoList(number) {
    const data = JSON.stringify({
        'messaging_product': 'whatsapp',
        'recipient_type': 'individual',
        'to': number,
        'type': 'interactive',
        'interactive': {
            'type': 'button',
            'body': {
                'text': 'Escoge tu forma más comoda de pagar:'
            },
            'action': {
                'buttons': [
                    {
                        'type': 'reply', // Cambiado para especificar el tipo de botón
                        'reply': {
                            'id': 'paypal', // Aquí se utiliza 'id' correctamente
                            'title': 'PayPal'
                        }
                    },
                    {
                        'type': 'reply', // Cambiado para especificar el tipo de botón
                        'reply': {
                            'id': 'banco', // Aquí se utiliza 'id' correctamente
                            'title': 'Banco'
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
    MessageList,
    FormasDePagoList
};