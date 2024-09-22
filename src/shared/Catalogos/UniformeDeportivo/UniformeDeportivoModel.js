// Modelo para Uniformes Deportivos
function UniformesList(number) {
    const data = JSON.stringify({
        'messaging_product': 'whatsapp',
        'recipient_type': 'individual',
        'to': number,
        'type': 'interactive',
        'interactive': {
            'type': 'list',
            'body': {
                'text': 'Seleccione una opción sobre uniformes:'
            },
            'action': {
                'button': 'Ver opciones',
                'sections': [
                    {
                        'title': 'Uniformes',
                        'rows': [
                            {
                                'id': 'manga_larga',
                                'title': '👕 Manga larga'
                            },
                            {
                                'id': 'manga_corta',
                                'title': '👕 Manga corta'
                            },
                            {
                                'id': 'uniformes_adulto',
                                'title': '🧑‍🤝‍🧑 Adultos'
                            },
                            {
                                'id': 'uniformes_nino',
                                'title': '👶 Niños'
                            },
                            {
                                'id': 'solo_pantaloneta',
                                'title': '🩳 Pantaloneta'
                            },
                            {
                                'id': 'solo_camisola',
                                'title': '👕 Camisola'
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
    UniformesList,
    MessageText
};

