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

function TiposGorrasList(number) {
    const data = JSON.stringify({
        'messaging_product': 'whatsapp',
        'recipient_type': 'individual',
        'to': number,
        'type': 'interactive',
        'interactive': {
            'type': 'list',
            'body': {
                'text': 'Seleccione el tipo de gorra que le interesa:'
            },
            'action': {
                'button': 'Tipo de Gorras',
                'sections': [
                    {
                        'title': 'Tipo de Gorras',
                        'rows': [
                            {
                                'id': 'gorrasPolyester',
                                'title': '🧢 Gorras de Poliéster'
                            },
                            {
                                'id': 'gorrasGabardina',
                                'title': '🧢 Gorras de Gabardina'
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
    TiposGorrasList
};
