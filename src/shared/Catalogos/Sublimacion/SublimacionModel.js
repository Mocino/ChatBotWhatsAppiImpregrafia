// Modelo para Sublimación sin las opciones de tamaños y diseños
function SublimacionList(number) {
    const data = JSON.stringify({
        'messaging_product': 'whatsapp',
        'recipient_type': 'individual',
        'to': number,
        'type': 'interactive',
        'interactive': {
            'type': 'list',
            'body': {
                'text': 'Seleccione una opción para obtener más información sobre nuestros productos de sublimación:'
            },
            'action': {
                'button': 'Ver opciones',
                'sections': [
                    {
                        'title': 'Sublimación',
                        'rows': [
                            {
                                'id': 'playeras_blancas',
                                'title': '👕⚪ Playeras blancas'
                            },
                            {
                                'id': 'playeras_negras',
                                'title': '👕⚫ Playeras negras'
                            },
                            {
                                'id': 'banderas',
                                'title': '🏳️ Banderas'
                            },
                            {
                                'id': 'bandas',
                                'title': '🎽 Bandas'
                            }
                        ]
                    }
                ]
            }
        }
    });
    return data;
}

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
    SublimacionList,
    MessageText
};
