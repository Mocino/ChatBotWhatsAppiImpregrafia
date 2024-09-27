// Modelo para Promocionales
function PromocionalesList(number) {
    const data = JSON.stringify({
        'messaging_product': 'whatsapp',
        'recipient_type': 'individual',
        'to': number,
        'type': 'interactive',
        'interactive': {
            'type': 'list',
            'body': {
                'text': 'Seleccione una opción para obtener más información sobre nuestros productos promocionales:'
            },
            'action': {
                'button': 'Ver opciones',
                'sections': [
                    {
                        'title': 'Promocionales',
                        'rows': [
                            {
                                'id': 'tazas',
                                'title': '☕ Tazas'
                            },
                            {
                                'id': 'platos_decorativos',
                                'title': '🍽️ Platos decorativos'
                            },
                            {
                                'id': 'plaquetas_vidrio',
                                'title': '📜 Plaquetas'
                            },
                            {
                                'id': 'mouse_pad',
                                'title': '🖱️ Mouse pad'
                            },
                            {
                                'id': 'gorras_poliester',
                                'title': '🧢 Gorras'
                            },
                            {
                                'id': 'gabachas',
                                'title': '🧑‍🍳 Gabachas'
                            },
                            {
                                'id': 'almohadas',
                                'title': '🛏️ Almohadas'
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


// Modelo para mensajes de texto simples
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
    PromocionalesList,
    MessageButtons,
    MessageText,
};
