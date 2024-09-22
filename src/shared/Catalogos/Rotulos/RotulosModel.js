// Modelo para Rótulos con luz
function RotulosConLuzList(number) {
    const data = JSON.stringify({
        'messaging_product': 'whatsapp',
        'recipient_type': 'individual',
        'to': number,
        'type': 'interactive',
        'interactive': {
            'type': 'list',
            'body': {
                'text': 'Seleccione una opción para obtener más información sobre nuestros rótulos con luz:'
            },
            'action': {
                'button': 'Ver opciones',
                'sections': [
                    {
                        'title': 'Rótulos con luz',
                        'rows': [
                            {
                                'id': 'letras_tipo_block',
                                'title': '🔠 Letras tipo block'
                            },
                            {
                                'id': 'logos',
                                'title': '🔰 Logos'
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
    RotulosConLuzList,
    MessageText
};
