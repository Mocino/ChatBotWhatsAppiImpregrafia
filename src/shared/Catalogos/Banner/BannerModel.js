// Modelo para Banners
function BannerList(number) {
    const data = JSON.stringify({
        'messaging_product': 'whatsapp',
        'recipient_type': 'individual',
        'to': number,
        'type': 'interactive',
        'interactive': {
            'type': 'list',
            'body': {
                'text': 'Seleccione un tipo de banner para obtener más información:'
            },
            'action': {
                'button': 'Ver opciones',
                'sections': [
                    {
                        'title': 'Banners publicitarios',
                        'rows': [
                            {
                                'id': 'roll_up',
                                'title': '📏 ROLL up 2x80 cm'
                            },
                            {
                                'id': 'banner_x',
                                'title': '🕸️ banner 1.80x80 cm'
                            },
                            {
                                'id': 'mini_banner',
                                'title': '🕷️ minibanner 22x44 cm'
                            },
                            {
                                'id': 'mini_roll_up',
                                'title': '📐 Mini ROLL up'
                            },
                            {
                                'id': 'banderola_gota',
                                'title': '💧 Banderola tipo gota'
                            }
                        ]
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
    BannerList,
    MessageText
};
