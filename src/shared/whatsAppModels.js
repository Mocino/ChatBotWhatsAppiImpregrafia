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

//// function MessageList(number) {
////     const data = JSON.stringify({
////         'messaging_product': 'whatsapp',
////         'recipient_type': 'individual',
////         'to': number,
////         'type': 'interactive',
////         'interactive': {
////             'type': 'list',
////             'body': {
////                 'text': 'Selecciona una opción:'
////             },
////             'action': {
////                 'button': 'Elige una opción',
////                 'sections': [
////                     {
////                         'title': 'Opciones',
////                         'rows': [
////                             {
////                                 'id': '0001',
////                                 'title': '🖼️ Mantas vinílicas'
////                             },
////                             {
////                                 'id': '001',
////                                 'title': '👕 Camisas'
////                             },
////                             {
////                                 'id': '002',
////                                 'title': '👖 Pantalones'
////                             },
////                             {
////                                 'id': '003',
////                                 'title': '👟 Calzado'
////                             },
////                             {
////                                 'id': '004',
////                                 'title': '🧥 Abrigos'
////                             },
////                             {
////                                 'id': '005',
////                                 'title': '🧢 Gorros'
////                             }
////                         ]
////                     }
////                 ]
////             }
////         }
////     });
////     return data;
//// }

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
                                'title': '🖌️ sublimación'
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