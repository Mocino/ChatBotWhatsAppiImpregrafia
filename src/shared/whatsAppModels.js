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
                                'id': '001',
                                'title': '👕 Camisas'
                            },
                            {
                                'id': '002',
                                'title': '👖 Pantalones'
                            },
                            {
                                'id': '003',
                                'title': '👟 Calzado'
                            },
                            {
                                'id': '004',
                                'title': '🧥 Abrigos'
                            },
                            {
                                'id': '005',
                                'title': '🧢 Gorros'
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
    MessageList
};